import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.css'],
  providers : [ArticlesService]
})
export class FullArticleComponent implements OnInit , OnDestroy {
  article;
  private sub: any;

  constructor(private route : ActivatedRoute , private articlesService : ArticlesService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      res => {
        this.articlesService.getArticle(res['slug']).subscribe(
          article => this.article = article
        )
      },

      err => console.log(err)
    )
  }
ngOnDestroy(){
  this.sub.unsubscribe();
}
}
