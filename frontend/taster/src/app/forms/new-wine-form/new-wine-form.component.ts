import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-wine-form',
  templateUrl: './new-wine-form.component.html',
  styleUrls: ['./new-wine-form.component.scss', '../../styles/fonts.scss']
})
export class NewWineFormComponent implements OnInit {

  constructor() { }

  formGroup = new FormGroup({
    winery: new FormControl(),
    year: new FormControl(),
    wine: new FormControl(),
    color: new FormControl(),
    alcohol: new FormControl(),
    isSparkling: new FormControl()
  })

  ngOnInit(): void {
  }

  add() {
    alert("Adding wine...")
  }
}
