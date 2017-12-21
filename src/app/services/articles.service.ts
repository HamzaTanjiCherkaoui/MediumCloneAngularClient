import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
const ENDPOINT = environment.ApiUrl+"articles"
@Injectable()
export class ArticlesService {
  
  constructor() { }

}
