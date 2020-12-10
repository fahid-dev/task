import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showTasks: boolean = true;
  user: string = 'invalid';
  userToken: string
  constructor(
    private http: HttpClient
    ) {}

  ngOnInit() {
    // this.token.dropInCatagory();
  }
}
