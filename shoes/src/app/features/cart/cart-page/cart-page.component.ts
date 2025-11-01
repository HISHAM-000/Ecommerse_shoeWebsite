import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/products.model';
import { Cart } from 'src/app/core/services/cart';
import { ProductService } from 'src/app/core/services/productService/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService= inject(Cart);
  private router=inject(Router)

  product?:Product;
  cartItems: any[] = [];
totalPrice: number = 0;
totalCount: number = 0;

  ngOnInit(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   if(id){
  //     this.product = this.productService.getProductsById(id);
  //   }

  // }
   this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getPrice();
      this.totalCount = this.cartService.getcount();
    });

    // Initial load
    this.cartService.reloadCart();
}
  increaseQuantity(item: any) {
    item.quantity++;
    this.cartService.updateCartitem(item);
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartService.updateCartitem(item);
    } else {
      this.removeItem(item.id);
    }
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
  }

  clearCart() {
    this.cartService.clearCart();
  }

}
