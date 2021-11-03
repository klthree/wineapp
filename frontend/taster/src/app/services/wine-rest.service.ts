import { Injectable } from '@angular/core';
import { Wine } from '../types/wine';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Color } from '../types/color';

@Injectable({
  providedIn: 'root'
})
export class WineRestService {

  constructor(private http: HttpClient) { }

  private wineUrl = 'http://localhost:8080/taste/v1/';

  addWine(wine:Wine): Observable<Wine> {
    return this.http.post<Wine>(this.wineUrl, wine);
  }

  getWine(wineId: number): Observable<Wine> {
    // const wine = WINES.find(wine => wine.id === wineId)!;
    const url = `${this.wineUrl}${wineId}`
    return this.http.get<Wine>(url);
  }

  getAllWines(): Observable<Wine[]> {
    const url = `${this.wineUrl}`;
    return this.http.get<Wine[]>(url);
  }

  getColors(): Observable<Color[]> {
    const url = `${this.wineUrl}/colors`;
    return this.http.get<Color[]>(url);
  }
}
