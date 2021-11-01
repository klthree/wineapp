import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WineRestService } from 'src/app/services/wine-rest.service';
import { WineryRestService } from 'src/app/services/winery-rest.service';
// import { Wine } from 'src/app/wine';
import { Wine2 } from 'src/app/types/wine2';
import { Winery } from 'src/app/types/winery';

@Component({
  selector: 'app-new-wine-form',
  templateUrl: './new-wine-form.component.html',
  styleUrls: ['./new-wine-form.component.scss']
})
export class NewWineFormComponent implements OnInit {

  constructor(private wineRestService: WineRestService,
              private wineryRestService:WineryRestService) { }

  formGroup = new FormGroup({
    winery: new FormControl(),
    region: new FormControl(),
    subregion: new FormControl(),
    year: new FormControl(),
    wineName: new FormControl(),
    color: new FormControl(),
    alcoholPercentage: new FormControl(),
    isSparkling: new FormControl()
  })

  isLoaded: boolean = false;

  wineries?: Winery[];

  ngOnInit(): void {
    this.wineryRestService.getWineries()
        .subscribe(winery => {
          this.wineries = winery
          if (this.wineries !== []) {
            this.isLoaded = true;
          }
        });
  }

  onSubmit() {
    let wine: Wine2 = {
      id: -1,
      winery: {
        wineryId: 20001,
        wineryName: this.formGroup.controls.winery.value,
        regionId: 400019
      },
      year: this.formGroup.controls.year.value,
      wineName: this.formGroup.controls.wineName.value,
      color: this.formGroup.controls.color.value,
      alcoholPercentage: this.formGroup.controls.alcoholPercentage.value,
      isSparkling: this.formGroup.controls.isSparkling.value
    }

    console.log(wine);
    console.log(this.wineRestService.addWine(wine).subscribe());
  }

  printHello() {
    console.log("Hello");
  }
}
