import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Assessment } from 'src/app/types/assessment';
import { AssessmentRestService } from 'src/app/services/assessment-rest.service';

@Component({
  selector: 'app-new-assessment-form',
  templateUrl: './new-assessment-form.component.html',
  styleUrls: ['./new-assessment-form.component.scss']
})
export class NewAssessmentFormComponent implements OnInit {

  constructor(private assessmentRestService:AssessmentRestService,
              private route:ActivatedRoute) { }

  aspectLabels = {
    acidity: "acidity",
    tannins: "tannins",
    sweetness: "sweetness",
    body: "body",
    burn: "burn"
  }

  assessment: Assessment = {
    assessmentId: 0,
    wineId: Number(this.route.snapshot.paramMap.get('id')),
    acidity: 3,
    tannins: 3,
    sweetness: 3,
    body: 3,
    burn: 3,
    visualDesc: '',
    olfactoryDesc: '',
    tasteDesc: '',
    finalAssessment: '',
    buyAgain: true
  }

  descriptionGroup = new FormGroup({
    visualDesc: new FormControl(),
    olfactoryDesc: new FormControl(),
    tasteDesc: new FormControl()
  })

  ngOnInit(): void {
  }

  setAttr(degree: number, attribute: string) {
    this.assessment[attribute] = degree;
    console.log(this.assessment);
  }

  submitAssessment() {
    this.assessment.visualDesc = this.descriptionGroup.controls.visualDesc.value;
    this.assessment.olfactoryDesc = this.descriptionGroup.controls.olfactoryDesc.value;
    this.assessment.tasteDesc = this.descriptionGroup.controls.tasteDesc.value;

    this.assessmentRestService.addAssessment(this.assessment).subscribe();
  }
}
