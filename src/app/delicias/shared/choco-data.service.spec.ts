import { TestBed } from '@angular/core/testing';

import { ChocoDataService } from './choco-data.service';

describe('ChocoDataService', () => {
  let service: ChocoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChocoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
