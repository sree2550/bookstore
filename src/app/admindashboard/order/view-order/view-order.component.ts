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
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  public cartObj: any = {}

  constructor(private http: HttpClient,
    private bookService: BooksService) { }

  ngOnInit() {
    this.getMyOrderData();
  }
  getMyOrderData(){
    
    this.http.get('http://127.0.0.1:8000/api/showorder/').subscribe(response => {

        this.cartObj = response;//when app load we get data
        console.log(this.cartObj);

    });
  }
  
  fn_confirm(id) {
    // let eid = evnt.target.id;
    this.http.get('http://127.0.0.1:8000/api/confirm-order/' +id).subscribe(response =>{
      this.cartObj = response;//when app load we get data

    });
  }
  

}
