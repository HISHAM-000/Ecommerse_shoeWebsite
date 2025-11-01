import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/products.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Cart } from 'src/app/core/services/cart';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  private router=inject(Router);
  private cartService= inject(Cart);
  private auth = inject(AuthService);


  // goToPayment(){
  //   this.router.navigate(['/checkout/payment'])
  // }
  shippingForm=new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    address: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    pin: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    paymentMethod: new FormControl('', Validators.required)

  });

  cartItem:Product[]=[];
  subtotal=0;
  total=0;
  tax=0;
  shippingCost=10

  ngOnInit(): void {
    this.loadCartData();
    
  const user = this.auth.getLoggedInUser();
  if (user) {
    this.shippingForm.patchValue({
      name: user.fullName,
      email: user.email
    });
  }
  }

  loadCartData(){
    this.cartItem=this.cartService.getCartItems();
    this.calculateTotals();
  }
  calculateTotals(){
    this.subtotal=this.cartService.getPrice();
    this.tax=this.subtotal * 0.12;
    this.total=this.subtotal+this.tax+this.shippingCost;
  }

 goToPayment() {
  if (this.shippingForm.valid) {
    const selectedMethod = this.shippingForm.value.paymentMethod;
    this.router.navigate(['/checkout/payment'], {
      queryParams: { method: selectedMethod }
    });
  } else {
    this.shippingForm.markAllAsTouched();
  }
}


}
