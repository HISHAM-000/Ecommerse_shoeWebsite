import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ProductsRoutingModule } from './products-routing.module';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManageProductComponent } from './manage-product-component/manage-product-component';
import { AddProductComponent } from './manage-product-component/add-product-component/add-product-component';
import { EditProductComponent } from './manage-product-component/edit-product-component/edit-product-component';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    ManageProductComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule,
    NgxPaginationModule,
    FormsModule,
    SharedModule
  ]
})
export class ProductsModule { }
