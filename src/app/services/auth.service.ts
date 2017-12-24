import { Injectable , EventEmitter } from '@angular/core';
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
	authChanged: EventEmitter<any> = new EventEmitter();
  constructor(private http: Http , private cookie : CookieService , private router : Router) { }
   
  login(user) {
    return this.http.post(ENDPOINT+"/login",{user:user}).map(res => res.json()["user"]).catch(this.handleError);
  }
  
  setAccessToken(user){

		this.cookie.put('auth_token', user.token);
		this.cookie.put('username', user.usernam);
		this.authChanged.emit(true);
		this.router.navigate(['/home']);
	
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
