import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductService } from 'src/app/core/services/productService/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private auth=inject(AuthService);
  private router=inject(Router);
  private toaster = inject(ToastrService);

  

  email="";
  password="";
 onLogin(loginForm:any){
  if(loginForm.valid){
    if(this.auth.onLogin(this.email,this.password)){
  this.toaster.success('Login Successfull');
       if (this.auth.isLoggedInAdmin()){
        this.router.navigate(['user/admin-dashboard'])
     }else{
        this.router.navigate(['/']),{
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
      }
      }
    }
    else{
      this.toaster.error('Invalid Email or Password','Login Failed')
    }
  }
  else{
    this.toaster.info('Please fill in all required fields')
  }
 }

}
