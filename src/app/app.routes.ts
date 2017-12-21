import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})
export class RoutesModule {
}
