import { Component ,inject, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/core/models/products.model';
import { ProductService } from 'src/app/core/services/productService/product.service';

@Component({
  selector: 'app-edit-product-component',
  templateUrl: './edit-product-component.html',
  styleUrls: ['./edit-product-component.css'],
})
export class EditProductComponent implements OnInit{
  private route = inject(ActivatedRoute);
  public router = inject(Router);
  private productService = inject(ProductService);
  private toaster = inject(ToastrService);

  product: Product = {
    id: 0,
    name: '',
    category: '',
    brand: '',
    price: 0,
    image: '',
    description: '',
    stock: 0
  };
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.productService.getProducts().find(p => p.id === id);
    if (found) this.product = { ...found };
    else {
      this.toaster.error('Product not found!');
      this.router.navigate(['/products/manage']);
    }
  }
   saveChanges() {
    this.productService.updateProduct(this.product);
    this.toaster.success(' Product updated successfully!');
    this.router.navigate(['/products/manage']);
  }
}
