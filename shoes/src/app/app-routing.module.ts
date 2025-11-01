import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartModule } from './features/cart/cart.module';
import { ErrorPageComponent } from './pages/error-page/error-page.component';


const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'home',component:HomeComponent},
  { path:'auth',
    loadChildren:()=> import("./features/auth/auth.module").then(m=>m.AuthModule)
  },
  { path:'products',
    loadChildren:()=>import("./features/products/products.module").then(m=>m.ProductsModule)
  },
  { path:'cart',
    loadChildren:()=> import("./features/cart/cart.module").then(m=>m.CartModule)
  },
  { path:'checkout',
    loadChildren:()=> import("./features/checkout/checkout.module").then(m=>m.CheckoutModule)
  },
  { path:'user',
    loadChildren:()=> import('./features/user/user.module').then(m=>m.UserModule)
  },
    { path: '**', component:ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
