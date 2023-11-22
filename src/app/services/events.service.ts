import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}
  public getEvents(apiUrl: string, headers: HttpHeaders): Observable<any> {
    return this.http
      .get<any>(apiUrl, { headers: headers })
      .pipe(tap((data) => console.log(JSON.stringify(data))));
  }
}
