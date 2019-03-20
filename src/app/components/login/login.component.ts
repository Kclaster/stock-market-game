import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Login } from '../../models/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input()
  client: Login = {
    id: null,
    password: null
  };
  @Output()
  loggedin: EventEmitter<Login> = new EventEmitter<Login>();

  background = '../../assets/sleek-background.jpg';

  login(event) {
    event.preventDefault();
    console.log(this.client);
    // console.log(event);
    // console.log(event.target[0].value);
    // console.log(event.target[1].value);
    this.client.id = event.target[0].value;
    this.client.password = event.target[1].value;
    this.loggedin.emit(this.client);
  }

  constructor() {}

  ngOnInit() {}
}
