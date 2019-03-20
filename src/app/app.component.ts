import { Component, ViewEncapsulation } from '@angular/core';
import { Login } from './models/login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'stock-market-game';
  client: Login = {
    id: null,
    password: null
  };

  handleLoggedIn = event => {
    this.client.id = event.id;
    this.client.password = event.password;
    console.log(event);
    this.router.navigateByUrl;
  };
}
