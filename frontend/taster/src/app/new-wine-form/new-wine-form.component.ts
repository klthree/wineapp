import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-wine-form',
  templateUrl: './new-wine-form.component.html',
  // template: `
  //   Wine Name: <input type="text" formControlName="wineName" />
  //   <br/>
  //   year: <input type="text" />
  //   <br/>
  //   winery: <input type="text" />
    
  // `,
  styleUrls: ['./new-wine-form.component.scss']
})
export class NewWineFormComponent implements OnInit {

  constructor() { }

  labels = {
    wineryLabel: "Winery",
    yearLabel: "Year",
    wineLabel: "Wine Name",
    colorLabel: "Color",
    alcoholLabel: "Alcohol %",
    sparklingLabel: "Sparkling"
  }

  
  colorsOptions = ["Red", "White", "Rose", "Orange"];
  sparklingOptions = ["Yes", "No"];
  
  formGroup = new FormGroup({
    winery: new FormControl(''),
    year: new FormControl(0),
    wine: new FormControl(''),
    color: new FormControl(''),
    alcohol: new FormControl(''),
    isSparkling: new FormControl('')
  })

  ngOnInit(): void {
  }

}
