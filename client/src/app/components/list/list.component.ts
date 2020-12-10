import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, take, catchError } from 'rxjs/operators';
import { saveAs } from 'file-saver';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: any
  public selectedDate: string;
  public datePickerConfig = {
      drops: 'up',
      format: 'YY/M/D'
  };

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getList();
  }

  public getList(): void {
    this.listService.getList().pipe(
      take(1),
      tap(response => {
        this.list = response;
        console.log(this.list);
        this.list.forEach(el => {
          let videoId = el.videoUrl.split('v=')[1];
          const ampersandPosition = videoId ? videoId.indexOf('&') : -1;
          if (ampersandPosition !== -1) {
            videoId = videoId.substring(0, ampersandPosition);
          }
          el.videoUrl = videoId;
        });
      }),
      catchError((err) => this.handleError('There was an error exporting the report.', err)))
      .subscribe();
  }

  public getJson(): void {
    this.listService.getJson().pipe(
      take(1),
      tap(response => {
          saveAs(response, 'Note');
      }),
      catchError((err) => this.handleError('There was an error exporting the report.', err)))
      .subscribe();
  }

  public filterByDate() {
    if (this.selectedDate) {
      const filterDate = new Date(this.selectedDate).toDateString();
      this.listService.getList(filterDate).pipe(
        take(1),
        tap(response => {
          this.list = response;
          this.list.forEach(el => {
            let videoId = el.videoUrl.split('v=')[1];
            const ampersandPosition = videoId ? videoId.indexOf('&') : -1;
            if (ampersandPosition !== -1) {
              videoId = videoId.substring(0, ampersandPosition);
            }
            el.videoUrl = videoId;
          });
        }),
        catchError((err) => this.handleError('There was an error exporting the report.', err)))
        .subscribe();
    }
  }

  private handleError(msg: string, err: any): Observable<any> {
    console.log(err);
    return of();
  }

}
