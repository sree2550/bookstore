import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ImgSliderComponent } from './home/img-slider/img-slider.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AboutComponent } from './home/about/about.component';
import { BooksComponent } from './home/books/books.component';
import { FooterComponent } from './home/footer/footer.component';
import { EndfooterComponent } from './home/endfooter/endfooter.component';
import { ShopComponent } from './shop/shop.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { SubnavComponent } from './subnav/subnav.component';
import { LoginpageComponent } from './myaccount/loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterpageComponent } from './signup/registerpage/registerpage.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminnavBarComponent } from './admindashboard/adminnav-bar/adminnav-bar.component';
import { BodyComponent } from './admindashboard/body/body.component';
import { AddBookComponent } from './admindashboard/add-book/add-book.component';
import { AddcategoryComponent } from './admindashboard/addcategory/addcategory.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BookComponent } from './admindashboard/book/book.component';
import { ViewBookComponent } from './admindashboard/book/view-book/view-book.component';
import { CategoryComponent } from './admindashboard/category/category.component';
import { ViewCategoryComponent } from './admindashboard/category/view-category/view-category.component';
import { AddSubcategoryComponent } from './admindashboard/add-subcategory/add-subcategory.component';
import { SubcategoryComponent } from './admindashboard/subcategory/subcategory.component';
import { ViewSubcategoryComponent } from './admindashboard/subcategory/view-subcategory/view-subcategory.component';
import { ShopProductComponent } from './shop-product/shop-product.component';
import { ProductViewComponent } from './shop-product/product-view/product-view.component';
import { PaymentComponent } from './payment/payment.component';
import { BooksPaymentComponent } from './payment/books-payment/books-payment.component';
import { CartComponent } from './cart/cart.component';
import { CartItemsComponent } from './cart/cart-items/cart-items.component';
import { PayModeComponent } from './payment/pay-mode/pay-mode.component';
import { PaymentTypeComponent } from './payment/payment-type/payment-type.component';
import { PayOnDeliveryComponent } from './payment/pay-on-delivery/pay-on-delivery.component';
import { HomeDeliveryComponent } from './payment/home-delivery/home-delivery.component';
import { AddCountryComponent } from './admindashboard/add-country/add-country.component';
import { CountryComponent } from './admindashboard/country/country.component';
import { StateComponent } from './admindashboard/state/state.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UserviewComponent } from './admindashboard/userview/userview.component';
import { ViewUserComponent } from './admindashboard/userview/view-user/view-user.component';
import { CommonModule } from '@angular/common';

import { EditBookComponent } from './admindashboard/book/edit-book/edit-book.component';
import {BooksService} from './services/books.service';
import { OrderComponent } from './admindashboard/order/order.component';
import { ViewOrderComponent } from './admindashboard/order/view-order/view-order.component';
import { ViewUserDetailsComponent } from './user/view-user-details/view-user-details.component';
import { AddItemToCartComponent } from './cart/add-item-to-cart/add-item-to-cart.component';
import { AdminViewCustomerComponent } from './admindashboard/order/admin-view-customer/admin-view-customer.component';
import { AdminViewBooksComponent } from './admindashboard/order/admin-view-books/admin-view-books.component';
import { AdminViewPaymentComponent } from './admindashboard/order/admin-view-payment/admin-view-payment.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ImgSliderComponent,
    AboutComponent,
    BooksComponent,
    FooterComponent,
    EndfooterComponent,
    ShopComponent,
    MyaccountComponent,
    SubnavComponent,
    LoginpageComponent,
    SignupComponent,
    RegisterpageComponent,
    AdmindashboardComponent,
    AdminnavBarComponent,
    BodyComponent,
    AddBookComponent,
    AddcategoryComponent,
    BookComponent,
    ViewBookComponent,
    CategoryComponent,
    ViewCategoryComponent,
    AddSubcategoryComponent,
    SubcategoryComponent,
    ViewSubcategoryComponent,
    ShopProductComponent,
    ProductViewComponent,
    PaymentComponent,
    BooksPaymentComponent,
    CartComponent,
    CartItemsComponent,
    PayModeComponent,
    PaymentTypeComponent,
    PayOnDeliveryComponent,
    HomeDeliveryComponent,
    AddCountryComponent,
    CountryComponent,
    StateComponent,
    UserComponent,
    UserviewComponent,
    ViewUserComponent,
    EditBookComponent,
    OrderComponent,
    ViewOrderComponent,
    ViewUserDetailsComponent,
    AddItemToCartComponent,
    AdminViewCustomerComponent,
    AdminViewBooksComponent,
    AdminViewPaymentComponent,
    LogoutComponent,
    SearchComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    
  ],

  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
