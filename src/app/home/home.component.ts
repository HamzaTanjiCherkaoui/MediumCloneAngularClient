import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 articles = [
  {
    "slug": "how-to-train-your-dragon",
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "Very carefully.",
    "createdAt": "2017-12-20T16:09:30.713Z",
    "updatedAt": "2017-12-20T16:09:30.713Z",
    "tagList": [
        "dragons",
        "training"
    ],
    "favoritesCount": 0,
    "author": {
        "username": "John Doe",
        "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
        "following": false
    }
},
{
  "slug": "increase-your-productivity",
  "title": "Increase your productivity",
  "description": "Ever wonder how?",
  "body": "Very carefully.",
  "createdAt": "2016-01-20T16:09:30.713Z",
  "updatedAt": "2017-12-20T16:09:30.713Z",
  "tagList": [
      "productivity",
      "training"
  ],
  "favoritesCount": 0,
  "author": {
      "username": "Robert Dinero",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false
  }
}
,
{
  "slug": "",
  "title": "How to train your dragon",
  "description": "Ever wonder how?",
  "body": "Very carefully.",
  "createdAt": "2017-12-20T16:09:30.713Z",
  "updatedAt": "2017-12-20T16:09:30.713Z",
  "tagList": [
      "dragons",
      "training"
  ],
  "favoritesCount": 0,
  "author": {
      "username": "Antoine grizly ",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false
  }
}
 ]
  constructor() { }

  ngOnInit() {
  }

}
