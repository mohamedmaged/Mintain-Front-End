import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Signin} from '../shared/signin';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
  
export class SigninComponent implements OnInit {
 @ViewChild('fform') elegantFormDirective;
  elegantForm: FormGroup;
  signin: Signin;


   constructor(private fb: FormBuilder,private auth: AuthenticationService, private router: Router) {
    this.elegantForm = fb.group({
     email:['',[ Validators.required, Validators.email ]],
     password:['', Validators.required ]
    });
  }

  ngOnInit() {
  }
  onSubmit(){
    this.auth.login(this.elegantForm.value).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
    console.log(this.elegantForm.value);
  }

}
