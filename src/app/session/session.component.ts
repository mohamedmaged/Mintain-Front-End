import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  sessions:any[]=[];
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.getwork().subscribe(user => {
      for (let key in user){
        let val = user[key];  
        this.sessions.push(val);
      }
      console.log(this.sessions);
    }, (err) => {
      console.error(err);
    });
  }

}
