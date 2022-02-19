import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  apiUrl = environment.url_base + '/api/persons';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getPersons(): Observable<any> {
    return this.http
      .get<any>(this.apiUrl)
      .pipe(retry(1), catchError(this.handleError));
  }

  getPerson(id: number): Observable<Person> {
    return this.http
      .get<Person>(`${this.apiUrl}/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getPersonsByPlanet(planet: number): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/planet/${planet}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  save(personStr: string): Observable<Person> {
    console.log("request", personStr);
    return this.http
      .post<Person>(this.apiUrl, personStr, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  update(id: number): Observable<Person> {
    return this.http
      .put<Person>(`${this.apiUrl}/${id}`, null, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => errorMessage);
  }
}
