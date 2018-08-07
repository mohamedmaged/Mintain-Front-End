import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {register} from '../shared/register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('fform') elegantFormDirective;
  elegantForm: FormGroup;
  register:register;
  constructor(private fb: FormBuilder) { 
    this.elegantForm = fb.group({
      email:['',[ Validators.required, Validators.email ]],
      password:['', Validators.required ],
      org:false,
      indv:true
     });
  }
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.elegantForm.value);
  }
}
