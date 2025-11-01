import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ToastrModule } from 'ngx-toastr';
// import { HomeComponent } from './pages/home/home.component';
// import { LoginComponent } from './features/auth/login/login.component';
// import { AuthModule } from './features/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })

    
    // AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
