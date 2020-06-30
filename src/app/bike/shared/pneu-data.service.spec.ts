import { TestBed } from '@angular/core/testing';

import { PneuDataService } from './pneu-data.service';

describe('PneuDataService', () => {
  let service: PneuDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PneuDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
