import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ShippingComponent,
    PaymentComponent,

  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CheckoutModule { }
