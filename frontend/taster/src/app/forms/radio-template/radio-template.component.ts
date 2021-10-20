import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-template',
  templateUrl: './radio-template.component.html',
  styleUrls: ['./radio-template.component.scss', '../../styles/fonts.scss']
})
export class RadioTemplateComponent implements OnInit {

  constructor() { }

  @Input() groupName?: string;
  @Output() degree?: number;

  ngOnInit(): void {
  }

}
