import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementSelectComponent } from './form-element-select.component';

describe('FormElementSelectComponent', () => {
  let component: FormElementSelectComponent;
  let fixture: ComponentFixture<FormElementSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormElementSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormElementSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
