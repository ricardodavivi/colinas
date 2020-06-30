import { TestBed } from '@angular/core/testing';

import { CelDataService } from './cel-data.service';

describe('CelDataService', () => {
  let service: CelDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
