import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/products.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Cart } from 'src/app/core/services/cart';
import { ProductService } from 'src/app/core/services/productService/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private productService = inject(ProductService);
  private router = inject(Router);
  private cart = inject(Cart);

  featuredProducts: Product[] = [];

  ngOnInit(): void {
     const featuredIds = [65, 68, 72];

    // Loop through the IDs and get the products one by one
    featuredIds.forEach(id => {
      const product = this.productService.getProductsById(id);
      if (product) {
        this.featuredProducts.push(product);
      }
    });
  }

  gotoDetail(id: number) {
    this.router.navigate(['/products', id]);
  }
   addToCart(product: Product, event: Event) {
    event.stopPropagation(); // Prevent card click navigation
    this.cart.addItemToCart(product); // Add item
    this.cart.reloadCart(); // Broadcast to navbar
    alert(`🛒 ${product.name} added to cart!`);
  }
}
