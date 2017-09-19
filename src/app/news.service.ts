import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class NewsService {
    constructor(private http: Http){
        
    }

    private url: string = 'https://newsapi.org/v1/sources?language=en&apiKey=3c6f68c69e42480eab51da2a642d4f0f&category=';

    getNews(search: string){
        return this.http.get(this.url+search).map((response: Response) => response.json());
    }
}