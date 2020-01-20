import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-item-to-cart',
  templateUrl: './add-item-to-cart.component.html',
  styleUrls: ['./add-item-to-cart.component.css']
})
export class AddItemToCartComponent implements OnInit {

  @Input() itemId: string;
  public viewSpinner = false;
  dsres:any;
  constructor(public ServCart: CartService) { }

  ngOnInit() {
  }

  fn_add_item_to_cart() {
    this.viewSpinner = true;
    const item_obj = {
      book_id: this.itemId,
      userId: localStorage.getItem('userId'),
      quantity: 1,
      status : 'To Cart'
    }
    this.ServCart.serv_add_items_to_cart(item_obj).subscribe(res => {
      console.log(this.ServCart);
      this.viewSpinner = false;
      if (res['status']) {
        this.ServCart.cart.push(item_obj);
      }
    });
  }

  fn_get_item_quantity() {
    const index = this.ServCart.cart.findIndex(x => x.book_id === this.itemId);
    if (index !== -1) {
      const item_obj = this.ServCart.cart[index];
      return item_obj.quantity;
    }
  }

  fn_incre_qty() {
    this.ServCart.serv_incre_item_qty(this.itemId);
  }

  fn_decre_qty() {
    this.ServCart.serv_decre_item_qty(this.itemId);
  }

  check_item_in_cart() {
    return this.ServCart.cart.findIndex(x => x.book_id === this.itemId)
  }

}
