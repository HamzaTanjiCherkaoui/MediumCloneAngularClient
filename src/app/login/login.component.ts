import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  user:  {email ?: string , password?: string};
  constructor(private auth: AuthService) {
    this.user = {};
  }

  ngOnInit() {
  }
  login() {

    this.auth.login(this.user).subscribe(
      res => {
        this.auth.setAccessToken(res);
      },
      err => console.log(err)
    )
  }

}
