import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss']
})
export class FormElementComponent implements OnInit {
  @Input() label?: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
