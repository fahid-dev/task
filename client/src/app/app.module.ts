import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './components//to-do-list/to-do-list.component';
import { ListComponent } from './components/list/list.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {DpDatePickerModule} from 'ng2-date-picker';

@NgModule({
  declarations: [AppComponent, ToDoListComponent, ListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    YouTubePlayerModule,
    DpDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
