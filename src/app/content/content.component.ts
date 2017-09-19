import { ContentService } from './../content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  news1 = [];
  news2 = [];
  news3 = [];
  news4 = [];
  news5 = [];
  news6 = [];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
  }

  getResults1() {

    this.contentService.getNews1().subscribe(responseNews => this.news1 = responseNews.sources);
  }

  getResults2() {

    this.contentService.getNews2().subscribe(responseNews => this.news2 = responseNews.sources);
  }

  getResults3() {

    this.contentService.getNews3().subscribe(responseNews => this.news3 = responseNews.sources);
  }

  getResults4() {

    this.contentService.getNews4().subscribe(responseNews => this.news4 = responseNews.sources);
  }

  getResults5() {

    this.contentService.getNews5().subscribe(responseNews => this.news5 = responseNews.sources);
  }

  getResults6() {

    this.contentService.getNews6().subscribe(responseNews => this.news6 = responseNews.sources);
  }
}
