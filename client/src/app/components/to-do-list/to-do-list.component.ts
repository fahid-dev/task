import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, take, catchError } from 'rxjs/operators';
import { ListService } from '../../services/list.service';
 
@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html'
})

export class ToDoListComponent {

    public selectedFile: File = null;
    constructor(private router: Router, private listService: ListService) {}

    public onFile(event): void {
        this.selectedFile = event.target.files[0] as File;
    }

    public addTask(data): void {
        const file = new FormData();
        file.append('file', this.selectedFile, this.selectedFile.name);
        file.append('title', data.title);
        file.append('videoUrl', data.videoUrl);
        this.listService.createTask(file).pipe(
            take(1),
            tap(response => {
                console.log(response);
                this.router.navigate([`list`]);
            }),
            catchError((err) => this.handleError('There was an error exporting the report.', err)))
            .subscribe();
    }

    private handleError(msg: string, err: any): Observable<any> {
        console.log(err);
        return of();
    }
}