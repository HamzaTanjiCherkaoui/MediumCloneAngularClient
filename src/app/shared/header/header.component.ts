import { Component, OnInit , Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() isAuthenticated;
  constructor( private auth : AuthService) { }

  ngOnInit() {
    this.auth.authChanged.subscribe(res => this.isAuthenticated =res)
  }
logout() {
  this.auth.logout();
}
}
