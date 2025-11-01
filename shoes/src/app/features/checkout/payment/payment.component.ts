import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  private router = inject(Router);
  private route = inject(ActivatedRoute);
 paymentMethod: string = '';
   showSuccessModal = false;



 
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.paymentMethod = params['method'];
    });

    if (!this.paymentMethod) {
      this.router.navigate(['/checkout/shipping']);
    }
  }

  confirmPayment() {
    // Simulate payment processing
    setTimeout(() => {
      this.showSuccessModal = true;
    }, 800);
  }

  closeModal() {
    this.showSuccessModal = false;
    this.router.navigate(['/home']);
  }
}
