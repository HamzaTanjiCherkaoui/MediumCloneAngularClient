import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutesModule} from './app.routes'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { SingleArticleComponent } from './single-article/single-article.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    SingleArticleComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
