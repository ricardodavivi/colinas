import { TestBed } from '@angular/core/testing';

import { BlocoDataService } from './bloco-data.service';

describe('BlocoDataService', () => {
  let service: BlocoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlocoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
