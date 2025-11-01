import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { authGuard } from 'src/app/core/guards/auth-guard';

const routes: Routes = [
  // { path:':id',component:CartPageComponent,canActivate:[authGuard]},
  { path:'',component:CartPageComponent,canActivate:[authGuard]}
]
  
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CartRoutingModule { }
