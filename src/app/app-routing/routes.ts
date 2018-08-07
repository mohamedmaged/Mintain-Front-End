import { Routes } from '@angular/router';
import {SigninComponent} from '../signin/signin.component';
import { HomeComponent } from '../home/home.component';
import {RegisterComponent} from '../register/register.component';
import {ProfileComponent} from '../profile/profile.component'
import { AuthGuardService } from '../auth-guard.service';
import {SessionComponent} from '../session/session.component';
import { WorkComponent } from '../work/work.component';


export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'signin',  component: SigninComponent}, 
    {path: 'register', component:RegisterComponent},
    {path: 'profile',component:ProfileComponent  },
    {path: 'session', component:SessionComponent,canActivate: [AuthGuardService]},
    {path: 'register', component:RegisterComponent},
    {path: 'work', component:WorkComponent,canActivate: [AuthGuardService]},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
