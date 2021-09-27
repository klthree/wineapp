import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWineFormComponent } from './new-wine-form.component';

describe('NewWineFormComponent', () => {
  let component: NewWineFormComponent;
  let fixture: ComponentFixture<NewWineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWineFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
