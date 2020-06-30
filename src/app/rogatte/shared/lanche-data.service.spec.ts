import { TestBed } from '@angular/core/testing';

import { LancheDataService } from './lanche-data.service';

describe('LancheDataService', () => {
  let service: LancheDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LancheDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
