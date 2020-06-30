import { TestBed } from '@angular/core/testing';

import { ConviteriaDataService } from './conviteria-data.service';

describe('ConviteriaDataService', () => {
  let service: ConviteriaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConviteriaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
