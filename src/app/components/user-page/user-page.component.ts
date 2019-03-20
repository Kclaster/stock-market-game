import { Component, OnInit } from '@angular/core';

import { News } from './news.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  news;

  constructor(private newsService: News) {}

  ngOnInit() {
    this.newsService.getNews().subscribe(data => {
      console.log('Data', data);
      this.news = data;
      console.log(this.news);
    });
  }
}
