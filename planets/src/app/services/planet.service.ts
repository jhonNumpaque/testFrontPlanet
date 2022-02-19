import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  apiUrl = environment.url_base + '/api/planets';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getPlanets(): Observable<any>{
    return this.http
      .get<any>(this.apiUrl)
      .pipe(retry(1), catchError(this.handleError));
  }

  getPlanet(id: number): Observable<Planet> {
    return this.http
      .get<any>(`${this.apiUrl}/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  save(planetStr: string): Observable<Planet> {
    return this.http.post<Planet>(this.apiUrl, planetStr, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  update(id: number): Observable<Planet> {
    return this.http
      .put<Planet>(`${this.apiUrl}/${id}`, null, this.httpOptions)
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
