import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
  isAuthenticated;
  authSub;
  constructor( private cookie : CookieService , private auth : AuthService) { 
    if(cookie.get('auth_token'))
    this.isAuthenticated = true;
    
  }
  ngOnInit() {
    
   }
  ngOnDestroy() {
    this.authSub.unsubscribe();
  }
}


