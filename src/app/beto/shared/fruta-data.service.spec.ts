import { TestBed } from '@angular/core/testing';

import { FrutaDataService } from './fruta-data.service';

describe('FrutaDataService', () => {
  let service: FrutaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrutaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
