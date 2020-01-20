import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: any = [];
  constructor(private http: HttpClient) { }

  fn_get_total_price() {
    let total_price = 0;
    this.cart.forEach(item => {
      total_price += (item.price * item.quantity)
    });
    return total_price;
  }

  serv_add_items_to_cart(item_obj) {
    return this.http.post('http://127.0.0.1:8000/api/insertcart/',item_obj);
    
  }

  fn_payment(pay_obj){
    return this.http.post('http://127.0.0.1:8000/api/payment/',pay_obj);

  }

  fn_payment_delivery(pay_obj){
    return this.http.post('http://127.0.0.1:8000/api/paydelivery/',pay_obj);

  }

  serv_incre_item_qty(itemId) {
    this.http.post('http://127.0.0.1:8000/api/incre_qty/', {itemId}).subscribe(res => {
      if (res['status']) {
        const index = this.cart.findIndex(x => x.book_id === itemId);
        if (index !== -1) {
          this.cart[index].quantity += 1;
        } 
      }
    });
  }

  serv_decre_item_qty(itemId) {
    this.http.post('http://127.0.0.1:8000/api/decrmnt_qty/', {itemId}).subscribe(res => {
      if (res['status']) {
    const index = this.cart.findIndex(x => x.book_id === itemId);
    if (index !== -1) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1;
      } else {
        this.cart.splice(index, 1);
      }
    }
  }
    });

}

getCartData(){
  this.http.get('http://127.0.0.1:8000/api/showcart?userId='+localStorage.getItem('userId')).subscribe(res => {
    this.cart = res;
  });
}

 deleteCartData(id){
  // console.log(id);
  return this.http.delete('http://127.0.0.1:8000/api/deletecart/'+id);
 }
 
}
