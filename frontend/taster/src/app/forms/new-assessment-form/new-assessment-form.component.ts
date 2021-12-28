import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ASSESSMENTS } from 'src/app/mock-assessments';
import { WineRestService } from 'src/app/services/wine-rest.service';

@Component({
  selector: 'app-new-assessment-form',
  templateUrl: './new-assessment-form.component.html',
  styleUrls: ['./new-assessment-form.component.scss']
})
export class NewAssessmentFormComponent implements OnInit {

  constructor(private wineRestService:WineRestService) { }

  aspectLabels = {
    acidity: "acidity",
    tannins: "tannins",
    sweetness: "sweetness",
    body: "body",
    burn: "burn"
  }

  flavorProfile: {[key: string]: number | string} = {
    acidity: 3,
    tannins: 3,
    sweetness: 3,
    body: 3,
    burn: 3,
    visual: '',
    olfactory: '',
    taste: '',
    comments: ''
  }

  descriptionGroup = new FormGroup({
    visual: new FormControl(),
    olfactory: new FormControl(),
    taste: new FormControl(),
    comments: new FormControl()
  })

  ngOnInit(): void {
  }

  setAttr(degree: number, attribute: string) {
    this.flavorProfile[attribute] = degree;
    console.log(this.flavorProfile);
  }

  submitAssessment() {
    this.flavorProfile.visual = this.descriptionGroup.controls.visual.value;
    this.flavorProfile.olfactory = this.descriptionGroup.controls.olfactory.value;
    this.flavorProfile.taste = this.descriptionGroup.controls.taste.value;

    ASSESSMENTS.push(this.flavorProfile);
    console.log(ASSESSMENTS);
  }
}
