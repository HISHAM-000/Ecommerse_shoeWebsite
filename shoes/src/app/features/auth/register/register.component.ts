import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/auth.model';
import { AuthService} from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
private auth=inject(AuthService);
private router=inject(Router);
private toaster = inject(ToastrService);


  signupForm= new FormGroup({
    name: new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmPassword: new FormControl('',Validators.required)
  })


  passwordMatch():boolean{
    const password=this.signupForm.get('password')?.value;
    const confirmPassword=this.signupForm.get('confirmPassword')?.value;
    return password===confirmPassword;
  }

 role='user';

register(){
  if(this.signupForm.invalid){
    this.toaster.info('Please fill all the required fields correctly');
    return
  }
  if(!this.passwordMatch()){
    this.toaster.error("Password Incorrect");
    return;
  }
  const user:User={
    fullName:this.signupForm.value.name!,
    email:this.signupForm.value.email!,
    password:this.signupForm.value.password!,
    role:this.role
  }
  console.log(user)
  if(this.auth.signUp(user)){
    this.toaster.success("Reistration Successfull");
    this.router.navigate(['/auth/login'])
  }
  else{
    this.toaster.error('Email already exists')
  }
}


}
