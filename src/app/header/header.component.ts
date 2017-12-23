import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  query: string;
  news = [];
  news1: News;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }


  getResults() {
    
    this.newsService.getNews(this.query).subscribe(responseNews => this.news = responseNews.sources);
  }

  saveDetails(){
    this.news.id= event.id.value
    this.newsService.saveNews(this.news);
  }
}