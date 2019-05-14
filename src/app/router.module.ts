import { NgModule } from '@angular/core';

import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule, Routes, } from '@angular/router';
import { HomeComponent, childRoutes } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoggedInGuard } from './loggedIn.guard';



const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, children: childRoutes, canActivate: [LoggedInGuard] },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginFormComponent },
];

@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forRoot(routes)
    ],
    providers: [LoggedInGuard],
    exports: [RouterModule]
})
export class AppRouterModule { }
