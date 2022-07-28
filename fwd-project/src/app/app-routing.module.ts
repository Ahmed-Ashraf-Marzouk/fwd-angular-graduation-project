import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductItemListComponent } from './product-item-list/product-item-list.component';

const routes: Routes = [
  {path:'', component:ProductItemListComponent},
  {path:'details/:id', component:ProductDetailsComponent},
  {path:'cart', component:CartComponent},
  {path:'confirmation', component:ConfirmationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
