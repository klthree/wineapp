import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPagesTemplateComponent } from './content-pages-template.component';

describe('ContentPagesTemplateComponent', () => {
  let component: ContentPagesTemplateComponent;
  let fixture: ComponentFixture<ContentPagesTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPagesTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPagesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
