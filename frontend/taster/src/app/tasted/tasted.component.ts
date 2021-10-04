import { Component, OnInit } from '@angular/core';
import { Wine } from '../wine';
import { WineService } from '../wine.service';

@Component({
  selector: 'app-tasted',
  templateUrl: './tasted.component.html',
  styleUrls: ['../styles/lists.css']
})
export class TastedComponent implements OnInit {

  constructor(private wineService: WineService) { }

  tastedWines: Wine[] = [];

  ngOnInit(): void {
    this.getTastedWines();
  }

  getTastedWines(): void{
    this.tastedWines = this.wineService.getTastedWines();
  }
}
