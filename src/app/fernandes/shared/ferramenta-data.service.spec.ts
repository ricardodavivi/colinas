import { TestBed } from '@angular/core/testing';

import { FerramentaDataService } from './ferramenta-data.service';

describe('FerramentaDataService', () => {
  let service: FerramentaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FerramentaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
