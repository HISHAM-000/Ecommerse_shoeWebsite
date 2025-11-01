import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private authService = inject(AuthService);
  title = 'shoes';
  ngOnInit(): void {
    console.log('initialized')
    this.authService.ensureAdminExists();
  }
}
