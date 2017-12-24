import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isAuthenticated;
  constructor( private cookie : CookieService) { 
    if(cookie.get('auth_token'))
    this.isAuthenticated = true;
  }
}


