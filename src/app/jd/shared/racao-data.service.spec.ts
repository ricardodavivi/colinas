import { TestBed } from '@angular/core/testing';

import { RacaoDataService } from './racao-data.service';

describe('RacaoDataService', () => {
  let service: RacaoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacaoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
