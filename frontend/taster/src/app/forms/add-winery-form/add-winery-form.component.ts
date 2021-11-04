import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WineryRestService } from 'src/app/services/winery-rest.service';

@Component({
  selector: 'app-add-winery-form',
  templateUrl: './add-winery-form.component.html',
  styleUrls: ['./add-winery-form.component.scss']
})
export class AddWineryFormComponent implements OnInit {

  constructor(private wineryService: WineryRestService) { }

  formGroup = new FormGroup({
    winery: new FormControl(),
    region: new FormControl(),
    subregion: new FormControl()
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    const winery = {
      wineryId: -1,
      wineryName: this.formGroup.value.winery,
      region: this.formGroup.value.region,
      subregion: this.formGroup.value.subregion
    }
    
    this.wineryService.addWinery(winery).subscribe();
  }

}
