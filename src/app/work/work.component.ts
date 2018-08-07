import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  details:any[] = [];
  constructor(private auth: AuthenticationService) { 

  }

  ngOnInit() {
    this.auth.getwork().subscribe(user => {
      for (let key in user){
        let val = user[key];  
        this.details.push(val);
      }
      console.log(this.details);
    }, (err) => {
      console.error(err);
    });
  }

}
