import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  BooksService
} from '../../../services/books.service';



@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  public bookObj: any = {}
  public category: any = [];
  id: any;
  public books: Array < any > = [];
  msg: any;
  constructor(private http: HttpClient,
    private bookService: BooksService) {}

  ngOnInit() {

    //  this.getBooks();
    this.get_category();
  }

  getBooks() {

    this.bookService.getMyData().subscribe(res => {
      this.bookObj = res;

    });
  }

  deleteData(id) {
    //console.log(id);
    var result = confirm("Are you sure you want to delete this item..?");
    if (result) {
      this.bookService.deleteData(id).subscribe(res => {
        this.getBooks();
      });
    }
  }



  get_category() {
    this.bookService.get_category().subscribe(res => {
      this.category = res;
    });
  }

  selectcat(event): void {
    const newVal = event.target.value;
    this.http.get('http://127.0.0.1:8000/api/selectCategory/' + newVal).subscribe(res => {
      if (Array.isArray(res)) {
        // this.bookObj = {}
        this.books = res;
      } else {
        this.books = [];
        const data = res[Object.keys(res)[0]]
        // this.bookObj = data;
        this.books.push(data);
        
      }
    });
  }



}

// DeleteData(book_id){
//   var result = confirm("Are you sure you want to delete this item..?");
//   if (result) {
//      this.bookService.deleteData(book_id).subscribe(res=>{
//      this.getBooks();
//   });
// }

// }
