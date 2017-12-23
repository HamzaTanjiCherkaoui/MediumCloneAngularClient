import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const ENDPOINT = environment.ApiUrl + "users"
@Injectable()
export class AuthService {
  constructor(private http: Http , private cookie : CookieService , private router : Router) { }
  
  login(user) {
    return this.http.post(ENDPOINT+"/login",JSON.stringify({user:user})).map(res => res.json()["user"]).catch(this.handleError);
  }
  
  setAccessToken(data){
		
		var token = data.payload;
		this.cookie.put('auth_token', token);
		this.router.navigate(['/account']);
		return Observable.timer(1000).mapTo({token : data.payload});

	}

	isAuthenticated() {
		return this.cookie.get("auth_token")?true:false;
	}
	
	logout() {
		this.cookie.remove('auth_token');
		this.router.navigate(['/']);
	}

  handleError(error) {
    // log Error in a log file or send the error to a third party
    return Observable.throw(error);

  }

}
