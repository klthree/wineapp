import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { WINES } from './mock-wines';
import { Wine } from './wine';


@Injectable({
  providedIn: 'root'
})
export class WineService {

  // private winesUrl = "api/wines";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor() { }

  // getWines
  getWines(): Wine[] {
    return WINES;
  }

  getTastedWines(): Wine[] {
    return WINES;
  }
  // getWine
  // updateWine
  // addWine
  // deleteWine
}
