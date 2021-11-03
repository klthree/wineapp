import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WineRestService } from '../services/wine-rest.service';
// import { WINES } from '../mock-wines';
import { Wine } from '../types/wine';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['../styles/lists.scss']
})
export class WineListComponent implements OnInit {

  wines?: Wine[];

  constructor(private wineService: WineRestService) { }

  ngOnInit(): void {
    this.wineService.getAllWines()
        .subscribe(result => {
          this.wines = result;
          console.log(result);
        }, error => console.log(error))
  }
}
