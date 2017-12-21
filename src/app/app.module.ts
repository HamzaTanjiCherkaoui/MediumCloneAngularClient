import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutesModule} from './app.routes'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    SingleArticleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
