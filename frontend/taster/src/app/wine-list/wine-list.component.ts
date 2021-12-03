import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, from, observable, zip, merge, concat } from 'rxjs';
import { concatAll, exhaust, exhaustMap, finalize, map, mergeAll, pairwise, subscribeOn, switchMap, tap, toArray } from 'rxjs/operators';
import { WineRestService } from '../services/wine-rest.service';
import { WineryRestService } from '../services/winery-rest.service';
import { DisplayWine } from '../types/displayWine';
import { Wine } from '../types/wine';
import { Winery } from '../types/winery';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['../styles/lists.scss']
})
export class WineListComponent implements OnInit {

  wines: Wine[] = [];
  displayWines: DisplayWine[] = [];
  // displayWines: DisplayWine[] = [{
  //         wineId: 1,
  //         wineName: "Cherry Wine",
  //         wineryName: "Bad winery",
  //         alcoholPercentage: 15.4,
  //         colorId: 1,
  //         year: 1998,
  //         isSparkling: "Yes",
  //         region: "Alabama",
  //         subregion: "mobile"
  //     }];
  columnsToDisplay: string[] = ['displayYear', 'displayName', 'displayWinery'];
  displayWinesLoaded: boolean = false;
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

    zip(observableWines, observableWineries)
      .pipe(
        map(wine => {
          return {
            wineId: wine[0].wineId,
            wineName: wine[0].wineName,
            alcoholPercentage: wine[0].alcoholPercentage,
            colorId: wine[0].colorId,
            year: wine[0].year,
            isSparkling: wine[0].isSparkling,
            wineryName: wine[1].wineryName,
            region: wine[1].region,
            subregion: wine[1].subregion
          }
        }),
        finalize(() => this.displayWinesLoaded = true)
      )
      .subscribe(displayWine => this.displayWines.push(displayWine));
    
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
