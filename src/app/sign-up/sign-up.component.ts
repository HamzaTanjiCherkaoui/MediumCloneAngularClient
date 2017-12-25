import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user:  {email ?: string , password?: string};
  constructor(private auth: AuthService) {
    this.user = {};
  }

  ngOnInit() {
  }
  signUp() {

    this.auth.login(this.user).subscribe(
      res => {
        this.auth.setAccessToken(res);
      },
      err => console.log(err)
    )
  }

}
