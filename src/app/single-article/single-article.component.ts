import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {
@Input() article ;
@Output() favorite ; 
  constructor() { }

  ngOnInit() {
  }

}
