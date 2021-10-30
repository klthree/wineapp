import { TestBed } from '@angular/core/testing';

import { WineRestService } from './wine-rest.service';

describe('WineRestService', () => {
  let service: WineRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WineRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
