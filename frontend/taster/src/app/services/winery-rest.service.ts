import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Winery } from '../types/winery';

@Injectable({
  providedIn: 'root'
})
export class WineryRestService {

  private wineryUrl: string = 'http://localhost:8091/winery/v1/';

  constructor(private http: HttpClient) { }

  getWinery(wineryId: number): Observable<Winery> {
    return this.http.get<Winery>(`${this.wineryUrl}${wineryId}`)
  }

  getWineries(): Observable<Winery[]> {
    return this.http.get<Winery[]>(this.wineryUrl);
  }

  addWinery(winery: Winery): Observable<Winery> {
    return this.http.post<Winery>(this.wineryUrl, winery);
  }
}
