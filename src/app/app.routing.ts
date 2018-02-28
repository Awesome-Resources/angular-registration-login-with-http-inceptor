import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/index';
import {LoginComponent} from './login/index';
import {RegisterComponent} from './register/index';
import {AuthGuard} from './guards/index';

const appRoutes: Routes = [
    { path : '', redirectTo : 'home', pathMatch : 'full', canActivate : [AuthGuard] },
    { path : 'login', component : LoginComponent },
    { path : 'register', component : RegisterComponent },
    { path : 'home', component : HomeComponent, canActivate : [AuthGuard] },

    // otherwise redirect to home
    { path : '**', redirectTo : 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);