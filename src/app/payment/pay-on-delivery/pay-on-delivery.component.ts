import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-pay-on-delivery',
  templateUrl: './pay-on-delivery.component.html',
  styleUrls: ['./pay-on-delivery.component.css']
})
export class PayOnDeliveryComponent implements OnInit {

  userid:any;
  par_obj:any;
  id:any;
  constructor(private http: HttpClient,
    public ServCart: CartService) { }
  ngOnInit() {
   
  }
  fn_pay(payment)
  {
    this.userid=localStorage.getItem('userId');
      this.par_obj= {

        userId : this.userid,
        total : payment,
        pay_type : "Pay On Delivery"

      }
      console.log(this.par_obj);
      this.ServCart.fn_payment(this.par_obj).subscribe(res => {
      });
}
  

}
