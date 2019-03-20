import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

const NEWS_API: string = 'assets/db.json';

@Injectable()
export class News {
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get(NEWS_API);
  }
}
