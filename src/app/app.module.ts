import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UserPageComponent } from './components/user-page/user-page.component';

import { News } from './components/user-page/news.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserPageComponent
  }
];

@NgModule({
  declarations: [AppComponent, LoginComponent, UserPageComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [News],
  bootstrap: [AppComponent]
})
export class AppModule {}
