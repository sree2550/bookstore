import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

import{BooksService} from '../../services/books.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  public bookObj: any = {}
  public books: any = [];


  id:any;

  constructor(private http: HttpClient,
    public ServCart: CartService,
    private route:ActivatedRoute,
    private bookService:BooksService) { }

  ngOnInit() {
    this.id=(this.route.snapshot.params.book_id);
    // this.getBooksImage();
    this.getData();
  }

  // getBooksImage(){
    
  //   this.http.get('http://127.0.0.1:8000/api/showallbooks/').subscribe(response => {
  //   //console.log(response);
  //       this.book = response;//when app load we get data

  //   });
  // }

  getBooks() {

    this.bookService.getMyData().subscribe(res => {
      this.bookObj = res;
      console.log(this.bookObj);
    });
  }

  getData(){
    this.bookService.getData(this.id).subscribe(res => {
      const keys = Object.keys(res);
      const data = res[keys[0]]
      this.bookObj = data;
      // console.log(this.bookObj);
    });
  }
}
