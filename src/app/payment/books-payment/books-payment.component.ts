import {Component,OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';

import {CartService} from 'src/app/services/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-books-payment',
  templateUrl: './books-payment.component.html',
  styleUrls: ['./books-payment.component.css']
})

export class BooksPaymentComponent implements OnInit {

  userid: any;
  par_obj: any;


  constructor(private http: HttpClient,
    private route: Router,
    public ServCart: CartService,
    private modalServ: NgbModal) {}

  ngOnInit() {

  }


  // fn_payment(payment) {
  //   console.log(payment);
  //   console .log(localStorage.getItem('userId'));
  //   this.ServCart.fn_payment(payment).subscribe(res => {
  //       this.ServCart.cart.push(payment);
  //   });
  //   }


  fn_pay(payment) {
    this.userid = localStorage.getItem('userId');
    this.par_obj = {
      userId: this.userid,
      total: payment,
      pay_type: "Credit Card"
    }
    console.log(this.par_obj);
     this.ServCart.fn_payment(this.par_obj).subscribe(res => {

    });
    this.modalServ.open('Payment Done');
    this.route.navigate(['home']);



  }

}
