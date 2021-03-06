import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { NotFoundComponent } from './static-pages/not-found/not-found.component';
import { FullArticleComponent } from './full-article/full-article.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { FavoritesArticlesComponent } from './favorites-articles/favorites-articles.component';



const appRoutes: Routes = [
    {
        path: '',
        redirectTo : 'home',
        pathMatch : 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    
    {
        path: 'confirm',
        component: ConfirmComponent
    },
    {
        path : '404',
        component : NotFoundComponent
    },
    {
        path:'home/:slug',
        component : FullArticleComponent
    },
    {
        path : 'account/dashboard',
        canActivate : [AuthGuard],
        component : DashboardComponent,
        children:[
            {
                path : 'profile',
                component:ProfileComponent
            },
            {
                path : 'my-articles',
                component:MyArticlesComponent
            },
            {
                path : 'my-favorites',
                component:FavoritesArticlesComponent
            },
            {
                path : '',
                redirectTo : '/account/dashboard/profile',
                pathMatch : 'full'
            },
            
        ]
        
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class RoutesModule {
}
