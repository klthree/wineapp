import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, from, observable, zip, merge, concat } from 'rxjs';
import { concatAll, exhaust, exhaustMap, map, mergeAll, pairwise, subscribeOn, switchMap, tap, toArray } from 'rxjs/operators';
import { WineRestService } from '../services/wine-rest.service';
import { WineryRestService } from '../services/winery-rest.service';
import { DisplayWine } from '../types/displayWine';
import { Wine } from '../types/wine';
import { Winery } from '../types/winery';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['../styles/lists.scss']
})
export class WineListComponent implements OnInit {

  wines: Wine[] = [];
  displayWines: DisplayWine[] = [];

  // wineries?: Set<Observable<Winery>>;
  wineries?: Winery[];

  constructor(private wineService: WineRestService,
              private wineryService: WineryRestService) { }

  ngOnInit(): void {
    let oWines: Wine[];
    
    let observableWines = this.wineService.getAllWines()
                            .pipe(
                              map(wine => from(wine)),
                              concatAll()
                            );                                

    let observableWineries = observableWines
                            .pipe(
                              map(wine => this.wineryService.getWinery(wine.wineryId)),
                              concatAll()
                            );

    zip(observableWines, observableWineries).subscribe(x => {
      let displayWine: DisplayWine = {
        wineName: x[0].wineName,
        alcoholPercentage: x[0].alcoholPercentage,
        colorId: x[0].colorId,
        year: x[0].year,
        isSparkling: x[0].isSparkling,
        wineryName: x[1].wineryName,
        region: x[1].region,
        subregion: x[1].subregion
      }

      this.displayWines.push(displayWine);
      console.log(x)
    })
    
    // observableWines.subscribe(wine => {
    //   let displayWine: DisplayWine = {
    //     wineName: "",
    //     alcoholPercentage: 0.0,
    //     colorId: 0,
    //     year: 1900,
    //     isSparkling: "",
    //     wineryName: "",
    //     region: "",
    //     subregion: ""
    //   };
    //   console.log("Ole " + wine.wineName);
    //   displayWine.wineName = wine.wineName;
    //   displayWine.colorId = wine.colorId;
    //   displayWine.isSparkling = wine.isSparkling;
    //   displayWine.year = wine.year;
    //   displayWine.alcoholPercentage = wine.alcoholPercentage;

    //   this.displayWines.push(displayWine);
    //   // this.wines?.push(wine);
    // });
    
    // observableWineries.subscribe(winery => {
    //   console.log(this.displayWines)
    //   console.log(winery)
      // console.log(winery);
      // this.wineries?.push(winery)
      // this.displayWine.wineryName = winery.wineryName;
      // this.displayWine.region = winery.region;
      // this.displayWine.subregion = winery.subregion;
    // });

    // this.wines?.forEach(w => console.log("OLE"));
  }
}
