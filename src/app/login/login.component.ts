import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(private auth : AuthService) {
    this.user ={};
   }

  ngOnInit() {
  }
  login(){
    console.log(this.user)
  // this.auth.login(user)
  }

}
