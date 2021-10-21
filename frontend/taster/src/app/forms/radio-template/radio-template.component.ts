import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-radio-template',
  templateUrl: './radio-template.component.html',
  styleUrls: ['./radio-template.component.scss', '../../styles/fonts.scss']
})
export class RadioTemplateComponent implements OnInit {

  constructor() { }

  @Input() groupName?: string;
  @Output() degreeEmitter = new EventEmitter<number>();
  radioGroup = new FormGroup({

    degree: new FormControl('3', Validators.required)
  
  })
  ngOnInit(): void {
  }

  sendDegree() {
    this.degreeEmitter.emit(this.radioGroup.controls.degree.value !== '0' ? this.radioGroup.controls.degree.value : 3);
  }
}
