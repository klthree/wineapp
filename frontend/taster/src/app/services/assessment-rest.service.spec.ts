import { TestBed } from '@angular/core/testing';

import { AssessmentRestService } from './assessment-rest.service';

describe('AssessmentRestService', () => {
  let service: AssessmentRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
