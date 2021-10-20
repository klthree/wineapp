import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Wine } from '../wine';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private http: HttpClient
  ) { }

  private wineUrl = 'https://localhost:8080/';
  private httpOptions = {
    headers: new HttpHeaders({
      'access-control-allow-origin': "http://localhost:4200",
      'Content-Type': 'application/json'
    })
  }
  

  addWine(wine: Wine): Observable<Wine> {
    return  this.http.post<Wine>(this.wineUrl, wine, this.httpOptions)
            ;
  }
}
