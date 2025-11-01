import { Component, inject, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/core/models/products.model';
import { ProductService } from 'src/app/core/services/productService/product.service';

@Component({
  selector: 'app-manage-product-component',
  templateUrl: './manage-product-component.html',
  styleUrls: ['./manage-product-component.css'],
})
export class ManageProductComponent implements OnInit{
  private router = inject(Router);
  private productService = inject(ProductService);
  private toaster = inject(ToastrService);
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = ['All']; // Default option
  selectedCategory: string = 'All';

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    this.products = storedProducts;
    this.extractCategories();
    this.applyFilter();
  }

  extractCategories() {
    const uniqueCategories = new Set(this.products.map(p => p.category));
    this.categories = ['All', ...uniqueCategories];
  }

  applyFilter() {
    if (this.selectedCategory === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        p => p.category === this.selectedCategory
      );
    }
  }

  editProduct(id: number) {
    this.router.navigate(['/products/manage/edit',id])
    console.log('Edit product with id:', id);
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.products = this.products.filter(p => p.id !== id);
      localStorage.setItem('products', JSON.stringify(this.products));
      this.applyFilter();
      this.toaster.success('✅ Product deleted successfully!');
    }
  }
}
