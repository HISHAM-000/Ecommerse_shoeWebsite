import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { ShippingComponent } from './shipping/shipping.component';


const routes: Routes = [
  { path:'payment',component:PaymentComponent},
  { path:'shipping',component:ShippingComponent},

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class CheckoutRoutingModule { }
