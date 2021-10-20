import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAssessmentFormComponent } from './new-assessment-form.component';

describe('NewAssessmentFormComponent', () => {
  let component: NewAssessmentFormComponent;
  let fixture: ComponentFixture<NewAssessmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAssessmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAssessmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
