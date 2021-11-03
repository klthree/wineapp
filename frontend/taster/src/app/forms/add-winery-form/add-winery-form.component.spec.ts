import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWineryFormComponent } from './add-winery-form.component';

describe('AddWineryFormComponent', () => {
  let component: AddWineryFormComponent;
  let fixture: ComponentFixture<AddWineryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWineryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWineryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
