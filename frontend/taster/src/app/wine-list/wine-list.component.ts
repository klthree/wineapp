import { Component, OnInit } from '@angular/core';
import { WineService } from '../wine.service';
import { Wine } from '../wine';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})
export class WineListComponent implements OnInit {

  constructor(private wineService: WineService) { }

  wines: Wine[] = [];

  getAllWines(): void {
    this.wines = this.wineService.getWines();
  }

  ngOnInit(): void {
    console.log("wines loaded");
    this.getAllWines();
  }

}
