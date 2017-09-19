import { FormsModule, FormControl } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NewsService } from './news.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContentService } from './content.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [NewsService,ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
