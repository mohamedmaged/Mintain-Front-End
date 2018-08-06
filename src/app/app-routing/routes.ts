import { Routes } from '@angular/router';
import {SigninComponent} from '../signin/signin.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'signin',  component: SigninComponent}, 
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];