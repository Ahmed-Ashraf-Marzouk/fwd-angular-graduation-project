import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductItemListComponent } from './product-item-list/product-item-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { CartProductItemComponent } from './cart-product-item/cart-product-item.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductItemListComponent,
    CartComponent,
    ProductDetailsComponent,
    FormComponent,
    CartProductItemComponent,
    ConfirmationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
