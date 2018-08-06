import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Signin} from '../shared/signin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
 @ViewChild('fform') elegantFormDirective;
  elegantForm: FormGroup;
  signin: Signin;
   constructor(private fb: FormBuilder) {
    this.elegantForm = fb.group({
     email:['',[ Validators.required, Validators.email ]],
     password:['', Validators.required ]
    });
  }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.elegantForm.value);
  }

}
