import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  public bookObj: any = {}
  cartitem:any;
  // id: any;
  // userId:any;
  // totalamount = 0;
  
  constructor(private http: HttpClient,
    public ServCart: CartService,) { }

  ngOnInit() {
    this.ServCart.getCartData();
    console.log(this.ServCart)
  }

deleteCartData(id) {
  //console.log(id);
  var result = confirm("Are you sure you want to delete this item..?");
  if (result) {
    this.ServCart.deleteCartData(id).subscribe(res => {
      this.ServCart.getCartData();
    });
  }
}
}




  

