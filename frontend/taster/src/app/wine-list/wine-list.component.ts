import { Component, OnInit } from '@angular/core';
import { WINES } from '../mock-wines';
import { Wine } from '../wine';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['../styles/lists.scss', '../styles/fonts.scss']
})
export class WineListComponent implements OnInit {

  wines: Wine[] = WINES;

  constructor() {
   }


  ngOnInit(): void {
  }

}
