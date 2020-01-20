import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  HomeComponent
} from './home/home.component';
import {
  ShopComponent
} from './shop/shop.component';
import {
  MyaccountComponent
} from './myaccount/myaccount.component';
import {
  SignupComponent
} from './signup/signup.component';
import {
  AdminnavBarComponent
} from './admindashboard/adminnav-bar/adminnav-bar.component';
import {
  AdmindashboardComponent
} from './admindashboard/admindashboard.component';
import {
  AddBookComponent
} from './admindashboard/add-book/add-book.component';
import {
  AddcategoryComponent
} from './admindashboard/addcategory/addcategory.component';
import {
  BookComponent
} from './admindashboard/book/book.component';
import {
  ViewBookComponent
} from './admindashboard/book/view-book/view-book.component';
import {
  CategoryComponent
} from './admindashboard/category/category.component';
import {
  ViewCategoryComponent
} from './admindashboard/category/view-category/view-category.component';
import {
  AddSubcategoryComponent
} from './admindashboard/add-subcategory/add-subcategory.component';
import {
  SubcategoryComponent
} from './admindashboard/subcategory/subcategory.component';
import {
  ViewSubcategoryComponent
} from './admindashboard/subcategory/view-subcategory/view-subcategory.component';

import { ShopProductComponent } from './shop-product/shop-product.component';

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
import { UserComponent } from './user/user.component';
import { UserviewComponent } from './admindashboard/userview/userview.component';
import { ViewUserComponent } from './admindashboard/userview/view-user/view-user.component';
import { EditBookComponent } from './admindashboard/book/edit-book/edit-book.component';

import { OrderComponent } from './admindashboard/order/order.component';
import { ViewOrderComponent } from './admindashboard/order/view-order/view-order.component';
import { ViewUserDetailsComponent } from './user/view-user-details/view-user-details.component';
import { AdminViewCustomerComponent } from './admindashboard/order/admin-view-customer/admin-view-customer.component';
import { AdminViewBooksComponent } from './admindashboard/order/admin-view-books/admin-view-books.component';
import { AdminViewPaymentComponent } from './admindashboard/order/admin-view-payment/admin-view-payment.component';
import { SearchComponent } from './search/search.component';
import { AdminGuard } from './admin.guard';
import { UserGuard } from './user.guard';

















const routes: Routes = [{
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'myaccount',
    component: MyaccountComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'shopbooks/:book_id',
    component: ShopProductComponent
  },
  {
    path: 'payment',
    component: PaymentComponent, 
       
  },

  {
    path: 'cart',
    component: CartItemsComponent
  },

  {
    path: 'search',
    component: SearchComponent
  },

  {
    path: 'user',
  canActivate:[UserGuard],
    component: UserComponent,
    children: [{
      path: 'view-user-details',
      component: ViewUserDetailsComponent
    }],
  },
  
  

  {
    path: 'admin',
    canActivate: [AdminGuard],
    component: AdmindashboardComponent,
    children: [{    
        path: 'book',
        component: BookComponent,
        children: [{
            path: 'add',
            component: AddBookComponent
          },
          {
            path: 'view-book',
            component: ViewBookComponent
          },
          {
            path: 'edit-book/:book_id',
            component: EditBookComponent
          }
        ]
      },
      {
        path: 'subcategory',
        component: SubcategoryComponent,
        children: [{
            path: 'add-subcategory',
            component: AddSubcategoryComponent
          },
          {
            path: 'view-book',
            component: ViewSubcategoryComponent
          }
        ]
      },
      {
        path: 'category',
        component: CategoryComponent,
        children: [{
            path: 'add-category',
            component: AddcategoryComponent
          },
          {
            path: 'view',
            component: ViewCategoryComponent
          },
        ]
      },

      {
        path: 'country',
        component: CountryComponent,
        children: [{
           
            path: 'add-district',
            component: StateComponent
          },
          
        ]
      },
      {
        path: 'user',
        component: UserviewComponent,
        children: [{
           
            path: 'view-user',
            component: ViewUserComponent

          },
          
        ]
      },
      {
        path: 'order',
        component: OrderComponent,
        children: [{
           
            
          path: 'view-order',
            component: ViewOrderComponent

          },
          {
          path: 'admin-view-customer/:fk_user_id',
            component: AdminViewCustomerComponent

          },
          {
          path: 'admin-view-books/:fk_user_id',
          component: AdminViewBooksComponent

        },
{
        path: 'admin-view-payment/:fk_user_id',
        component: AdminViewPaymentComponent

      },
          
        ]
      },

    ],
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
