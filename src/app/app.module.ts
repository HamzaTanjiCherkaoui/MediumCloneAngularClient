import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {RoutesModule} from './app.routes'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ProfileComponent } from './profile/profile.component';
import { FollowingComponent } from './following/following.component';
import { FollowersComponent } from './followers/followers.component';
import { NotFoundComponent } from './static-pages/not-found/not-found.component';
import { FullArticleComponent } from './full-article/full-article.component';
import { CommentsComponent } from './comments/comments.component';
import { HeaderComponent } from './shared/header/header.component';
import { NewArticleComponent } from './new-article/new-article.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    SingleArticleComponent,
    LoginComponent,
    FeedComponent,
    DashboardComponent,
    ConfirmComponent,
    ProfileComponent,
    FollowingComponent,
    FollowersComponent,
    NotFoundComponent,
    FullArticleComponent,
    CommentsComponent,
    HeaderComponent,
    NewArticleComponent,
    
  ],
  imports: [
    BrowserModule,
    RoutesModule, 
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
