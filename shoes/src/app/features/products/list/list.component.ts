import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/core/models/products.model';
import { Cart } from 'src/app/core/services/cart';
import { ProductService } from 'src/app/core/services/productService/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
   encapsulation:ViewEncapsulation.None
})
export class ListComponent implements OnInit {
 private productService = inject(ProductService);
 private router=inject(Router);
 private route= inject(ActivatedRoute);
 private cart= inject(Cart);
 private toaster= inject(ToastrService);

 products! : Product[];
 page: number = 1;            
 itemsPerPage: number = 8;
 selectedCategory:string="All";
 ngOnInit(){
 this.productService.getProductsStream().subscribe(products => {
    this.products = products;
  });
  
    this.route.paramMap.subscribe(params=>{
    const category=params.get('category');
    this.selectedCategory=category? category.toLowerCase() :"All";
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
 }
    get filteredProducts():Product[]{
    if(this.selectedCategory==='All') return this.products;
    return this.products.filter(p=> p.category===this.selectedCategory);
  }
 gotoDetail(id:number){
  this.router.navigate(['/products',id])
 }

  addToCart(product: Product) {
    this.cart.addItemToCart(product);
    this.toaster.success(`🛒 ${product.name} added to your cart!`);
  }
}
