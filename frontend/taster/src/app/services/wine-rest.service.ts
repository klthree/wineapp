import { Injectable } from '@angular/core';
import { Wine } from '../wine';
import { HttpClient } from '@angular/common/http';
import { WINES } from '../mock-wines';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WineRestService {

  constructor(private http: HttpClient) { }

  private wineUrl = 'http://localhost:8080/taste/v1/'
  wines = WINES;

  getWine(wineId: number): Observable<Wine> {
    // const wine = WINES.find(wine => wine.id === wineId)!;
    const url = `${this.wineUrl}${wineId}`
    return this.http.get<Wine>(url);
  }
}
