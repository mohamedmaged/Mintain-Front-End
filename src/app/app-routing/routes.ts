import { Routes } from '@angular/router';
import {SigninComponent} from '../signin/signin.component';
import { HomeComponent } from '../home/home.component';
import {RegisterComponent} from '../register/register.component';
import {ProfileComponent} from '../profile/profile.component'
import { AuthGuardService } from '../auth-guard.service';


export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'signin',  component: SigninComponent}, 
    {path: 'register', component:RegisterComponent},
    {path: 'profile',component:ProfileComponent ,canActivate: [AuthGuardService] },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
