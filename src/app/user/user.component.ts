import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  BooksService
} from '../services/books.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public books: any = [];
  public category: any = [];
  public users: any = [];
  userId:any;
  usersname:any;
  id:any;
  // public stock:any = true;
  constructor(private http: HttpClient,
    private bookService: BooksService,
    public ServCart: CartService
  ) {}

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    this.ServCart.getCartData();
    // this.getBooksImage();
    this.get_category();
     this.getBooks();
     this.getUser();

    // console.log(this.userId);

  }

  get_category() {
    this.bookService.get_category().subscribe(res => {
      this.category = res;
    });
  }

  selectcat(event): void {
    const newVal = event.target.value;
    this.http.get('http://127.0.0.1:8000/api/chooseCategory/' + newVal).subscribe(res => {
      // console.log(res)
      if (Array.isArray(res)) {
        this.books = res;
      } else {
        this.books = [];
        const data = res[Object.keys(res)[0]]
        this.books.push(data);
        //this.stock = data['quantity'];
        // if(this.stock>0){
        //    this.stock = true;
        //   console.log(this.stock);
        // }
      }
    });
  }

  getBooksImage() {

    this.http.get('http://127.0.0.1:8000/api/showallbooks/').subscribe(response => {
      //console.log(response);
      this.books = response; //when app load we get data

    });
  }
  getBooks() {

    this.bookService.getMyData().subscribe(res => {
      this.books = res;
      // console.log(this.books['quantity']);
    });
  }

  getUser(){
    this.http.get('http://127.0.0.1:8000/api/usermessage/'+this.userId).subscribe(res => {
      
       // console.log(this.userId);
        this.usersname = res;
        
          
    });
  }

  


}
