import { Component, OnInit } from '@angular/core';
import { WINES } from '../mock-wines';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})
export class WineListComponent implements OnInit {

  constructor() { }

  wines = WINES;

  ngOnInit(): void {
  }

}
