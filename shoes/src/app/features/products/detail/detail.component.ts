import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/core/models/products.model';
import { Cart } from 'src/app/core/services/cart';
import { ProductService } from 'src/app/core/services/productService/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private route=inject(ActivatedRoute);
  private productService=inject(ProductService);  
  private cartService=inject(Cart);
  private toaster = inject(ToastrService);

  product?:Product;
  sizes = [6, 7, 8, 9, 10];
  colors = ['Black', 'White', 'Blue'];
  selectedSize = 8;
  selectedColor = 'Black';
  quantity = 1;

  ngOnInit(): void {
      const id=+this.route.snapshot.paramMap.get('id')!;
  this.product=this.productService.getProductsById(id)

  }
  
  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart() {
    if (!this.product) return;

    const cartItem = {
      ...this.product,
      selectedSize: this.selectedSize,
      selectedColor: this.selectedColor,
      quantity: this.quantity
    };

    this.cartService.addItemToCart(cartItem);
    this.toaster.success(`${this.product.name} (x${this.quantity}) added to cart!`);
  }

}
