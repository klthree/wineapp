import { TestBed } from '@angular/core/testing';

import { WineryRestService } from './winery-rest.service';

describe('WineryRestService', () => {
  let service: WineryRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WineryRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
