import { Component, OnInit } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  BooksService
} from '../../../services/books.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-view-payment',
  templateUrl: './admin-view-payment.component.html',
  styleUrls: ['./admin-view-payment.component.css']
})
export class AdminViewPaymentComponent implements OnInit {

  public cartObj: any = {}
  id:any;
  constructor(private http: HttpClient,
    private route:ActivatedRoute,
       private bookService: BooksService) { }


  ngOnInit() {
    this.id=(this.route.snapshot.params.fk_user_id);
    this.getPaymentData(this.id);
  }
  getPaymentData(id){
    
    this.http.get('http://127.0.0.1:8000/api/paymentdata/'+this.id,this.cartObj).subscribe(response => {

        this.cartObj = response;//when app load we get data
        console.log(this.cartObj);

    });
  }
}
