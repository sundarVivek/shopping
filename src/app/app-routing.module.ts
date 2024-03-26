import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './components/product/view-product/view-product.component';
import { CartComponent } from './components/product/cart/cart.component';
import { OrderHistoryComponent } from './components/product/order-history/order-history.component';

const routes: Routes = [
  {
    path:'',redirectTo:'view-product',pathMatch:'full',
  },
  {
    path:'view-product',
    component:ViewProductComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'history',
    component:OrderHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
