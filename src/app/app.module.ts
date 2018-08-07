import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthenticationService} from './authentication.service';
import { HttpClientModule} from '@angular/common/http';
import {AuthGuardService} from './auth-guard.service';
import { PheaderComponent } from './pheader/pheader.component';
import { WorkComponent } from './work/work.component';
import { SessionComponent } from './session/session.component';
import { CvComponent } from './cv/cv.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    PheaderComponent,
    WorkComponent,
    SessionComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
HttpClientModule
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
