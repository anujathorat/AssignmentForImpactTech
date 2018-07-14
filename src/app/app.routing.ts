import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { CountrylistcomponentComponent } from './countrylistcomponent/countrylistcomponent.component';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'app-countrylistcomponent', component: CountrylistcomponentComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);