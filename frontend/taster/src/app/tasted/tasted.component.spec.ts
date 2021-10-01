import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastedComponent } from './tasted.component';

describe('TastedComponent', () => {
  let component: TastedComponent;
  let fixture: ComponentFixture<TastedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TastedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TastedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
