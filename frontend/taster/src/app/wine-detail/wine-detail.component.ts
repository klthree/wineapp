import { Wine } from '../types/wine';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WineRestService } from '../services/wine-rest.service';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.scss']
})
export class WineDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private wineService: WineRestService) { }

  ngOnInit(): void {
    this.getWine();
  }

  wine?: Wine;

  getWine(): void {
    const wineId = Number(this.route.snapshot.paramMap.get('id'))
    this.wineService.getWine(wineId)
                    .subscribe(result => this.wine = result,
                               err => console.log(err));
  }
}
