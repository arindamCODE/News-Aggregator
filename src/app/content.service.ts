import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ContentService {
    constructor(private http: Http) {

    }

    private url1: string = 'https://newsapi.org/v1/sources?language=en&apiKey=3c6f68c69e42480eab51da2a642d4f0f&country=au';
    private url2: string = 'https://newsapi.org/v1/sources?language=en&apiKey=3c6f68c69e42480eab51da2a642d4f0f&country=de';
    private url3: string = 'https://newsapi.org/v1/sources?language=en&apiKey=3c6f68c69e42480eab51da2a642d4f0f&country=gb';
    private url4: string = 'https://newsapi.org/v1/sources?language=en&apiKey=3c6f68c69e42480eab51da2a642d4f0f&country=in';
    private url5: string = 'https://newsapi.org/v1/sources?language=en&apiKey=3c6f68c69e42480eab51da2a642d4f0f&country=it';
    private url6: string = 'https://newsapi.org/v1/sources?language=en&apiKey=3c6f68c69e42480eab51da2a642d4f0f&country=us';

    getNews1() {
        return this.http.get(this.url1).map((response: Response) => response.json());
    }

    getNews2() {
        return this.http.get(this.url2).map((response: Response) => response.json());
    }

    getNews3() {
        return this.http.get(this.url3).map((response: Response) => response.json());
    }

    getNews4() {
        return this.http.get(this.url4).map((response: Response) => response.json());
    }

    getNews5() {
        return this.http.get(this.url5).map((response: Response) => response.json());
    }

    getNews6() {
        return this.http.get(this.url6).map((response: Response) => response.json());
    }
}