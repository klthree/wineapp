import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-assessment-form',
  templateUrl: './new-assessment-form.component.html',
  styleUrls: ['./new-assessment-form.component.scss']
})
export class NewAssessmentFormComponent implements OnInit {

  constructor() { }

  aspectLabels = {
    acidity: "acidity",
    tannins: "tannins",
    sweetness: "sweetness",
    body: "body",
    burn: "burn"
  }

  flavorProfile: {[key: string]: number} = {
    acidity: 3,
    tannins: 3,
    sweetness: 3,
    body: 3,
    burn: 3
  }

  ngOnInit(): void {
  }

  setAttr(degree: number, attribute: string) {
    this.flavorProfile[attribute] = degree;
    console.log(this.flavorProfile);
  }
}
