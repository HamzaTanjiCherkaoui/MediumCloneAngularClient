import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.css']
})
export class FullArticleComponent implements OnInit , OnDestroy {
  slug: String;
  private sub: any;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      res => this.slug = res['slug'],
      // loadFullArticle
      err => console.log(err)
    )
  }
ngOnDestroy(){
  this.sub.unsubscribe();
}
}
