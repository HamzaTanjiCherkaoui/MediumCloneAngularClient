import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const ENDPOINT = environment.ApiUrl+"articles"
@Injectable()
export class ArticlesService {
  
  constructor(private http : Http) { }
  articles(){
    return this.http.get(ENDPOINT).map(res =>res.json()).catch(null);
  }

  handleError(error){
    // log Error in a log file or send the error to a third party
    Observable.throw(error);
    
  }
}
