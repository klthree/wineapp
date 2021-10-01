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

  formGroup = new FormGroup({
    winery: new FormControl(''),
    year: new FormControl(0),
    wineName: new FormControl(''),
    color: new FormControl('')
  })

  ngOnInit(): void {
  }

}
