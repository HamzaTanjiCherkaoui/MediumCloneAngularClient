import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
