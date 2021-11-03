import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WineryRestService } from 'src/app/services/winery-rest.service';

@Component({
  selector: 'app-add-winery-form',
  templateUrl: './add-winery-form.component.html',
  styleUrls: ['./add-winery-form.component.scss']
})
export class AddWineryFormComponent implements OnInit {

  constructor(wineryService: WineryRestService) { }

  formGroup = new FormGroup({
    winery: new FormControl(),
    region: new FormControl(),
    subregion: new FormControl()
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

}
