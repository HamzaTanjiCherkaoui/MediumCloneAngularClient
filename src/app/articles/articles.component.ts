import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  ar = [0,1,2,3,4];
 @Input() articles;
  constructor() { }

  ngOnInit() {
  }

}
