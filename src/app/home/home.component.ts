import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [ArticlesService]
})
export class HomeComponent implements OnInit {
 articles = [ ]
  constructor(private articlesSerivce : ArticlesService) {
    articlesSerivce.getArticles().subscribe(
        res => this.articles = res,
        err => this.displayError
    )
   }

  ngOnInit() {
  }
  displayError(error){
      console.log(error);
  }
}
