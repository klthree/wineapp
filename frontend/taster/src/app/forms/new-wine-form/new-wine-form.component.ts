import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { WineRestService } from 'src/app/services/wine-rest.service';
import { WineryRestService } from 'src/app/services/winery-rest.service';
import { Color } from 'src/app/types/color';
import { Wine } from 'src/app/types/wine';
import { Winery } from 'src/app/types/winery';
import { AddWineryFormComponent } from '../add-winery-form/add-winery-form.component';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-new-wine-form',
  templateUrl: './new-wine-form.component.html',
  styleUrls: ['./new-wine-form.component.scss']
})
export class NewWineFormComponent implements OnInit {

  constructor(private wineService: WineRestService,
              private wineryService:WineryRestService,
              public dialog: MatDialog) { }

  formGroup = new FormGroup({
    winery: new FormControl(),
    year: new FormControl(),
    wineName: new FormControl(),
    colorId: new FormControl(),
    alcoholPercentage: new FormControl(),
    isSparkling: new FormControl()
  })

  isLoaded: boolean = false;

  ngOnInit(): void {
    this.setWineries();
    this.setColors();
  }

  setWineries(): void {
    this.wineryService.getWineries()
    .subscribe(winery => {
      this.wineries = winery;
    });
  }

  wineries: Winery[] = [];
  colors: Color[] = [];

  setColors(): void {
    this.wineService.getColors()
                    .subscribe(colors => this.colors = colors)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddWineryFormComponent)
  }

  onSubmit() {
    // const winery = this.wineries.find(winery => {
    //   return winery.wineryId === this.formGroup.value.winery.value});

    // if (!!winery) {
      let wine: Wine = {
        wineId: -1,
        wineryId: this.formGroup.value.winery,
        year: this.formGroup.value.year,
        wineName: this.formGroup.value.wineName,
        colorId: this.formGroup.value.colorId,
        alcoholPercentage: this.formGroup.value.alcoholPercentage,
        isSparkling: this.formGroup.value.isSparkling
      }

      console.log(wine);
      console.log(this.wineService.addWine(wine).subscribe());
    // }
  }
}
