import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

const ENDPOINT = environment.ApiUrl + "articles"
@Injectable()
export class ArticlesService {

  constructor(private http: Http) { }
  getArticles() {
    return this.http.get(ENDPOINT).delay(5000).map(res => res.json()["articles"]).catch(this.handleError);
  }
  getArticle(slug) {
    return this.http.get(ENDPOINT+"/"+slug).delay(2000).map(res => res.json()["article"]).catch(this.handleError);
  }
  handleError(error) {
    // log Error in a log file or send the error to a third party
    return Observable.throw(error);

  }
}
