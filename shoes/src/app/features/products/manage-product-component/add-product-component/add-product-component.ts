import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/core/models/products.model';
import { ProductService } from 'src/app/core/services/productService/product.service';

@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.html',
  styleUrls: ['./add-product-component.css'],
})
export class AddProductComponent {
  private productService = inject(ProductService);
  private router = inject(Router);
  private toaster = inject(ToastrService);
  product:Product={
     name: '',
    category: '',
    brand: '',
    price: 0,
    image: '',
    description: '',
    stock: 0
  }

 

 onSubmit() {
    this.productService.addProduct(this.product as Product);
    this.toaster.success('✅ Product added successfully!');
    this.router.navigate(['/products/manage']);
  }
}
