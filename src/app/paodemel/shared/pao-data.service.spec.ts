import { TestBed } from '@angular/core/testing';

import { PaoDataService } from './pao-data.service';

describe('PaoDataService', () => {
  let service: PaoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
