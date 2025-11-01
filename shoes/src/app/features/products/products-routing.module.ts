import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ManageProductComponent } from './manage-product-component/manage-product-component';
import { AddProductComponent } from './manage-product-component/add-product-component/add-product-component';
import { EditProductComponent } from './manage-product-component/edit-product-component/edit-product-component';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path:'list',component:ListComponent},
  { path: 'category/:category', component: ListComponent },
   { path: 'manage', component: ManageProductComponent },
  { path: 'manage/add', component: AddProductComponent },
  { path: 'manage/edit/:id', component: EditProductComponent },
   { path:':id',component:DetailComponent},

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ProductsRoutingModule { }
