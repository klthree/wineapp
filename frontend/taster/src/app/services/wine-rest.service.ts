import { Injectable } from '@angular/core';
import { Wine } from '../types/wine';
import { HttpClient } from '@angular/common/http';
import { WINES } from '../mock-wines';
import { Observable, of } from 'rxjs';
import { Wine2 } from '../types/wine2';

@Injectable({
  providedIn: 'root'
})
export class WineRestService {

  constructor(private http: HttpClient) { }

  private wineUrl = 'http://localhost:8080/taste/v1/'
  wines = WINES;

  addWine(wine:Wine2): Observable<Wine> {
    return this.http.post<Wine>(this.wineUrl, wine);
  }

  getWine(wineId: number): Observable<Wine> {
    // const wine = WINES.find(wine => wine.id === wineId)!;
    const url = `${this.wineUrl}${wineId}`
    return this.http.get<Wine>(url);
  }
}
