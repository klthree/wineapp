import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-form-element-select',
  templateUrl: './form-element-select.component.html',
  styleUrls: ['./form-element-select.component.scss']
})
export class FormElementSelectComponent implements OnInit {
  @Input() label?: string;
  @Input() options?: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
