import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  public getList(date: string = 'all'): any {
    return this.http.get(`http://localhost:3000/data/${date}`);
  }

  public createTask(item: any): any {
    return this.http.post('http://localhost:3000/upload', item);
  }

  public getJson(): any {
    return this.http.get('http://localhost:3000', {
      responseType: 'blob'
    });
  }

}
