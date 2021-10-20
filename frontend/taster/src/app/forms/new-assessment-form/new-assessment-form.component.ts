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

  ngOnInit(): void {
  }

}
