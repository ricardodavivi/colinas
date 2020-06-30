import { TestBed } from '@angular/core/testing';

import { MakeDataService } from './make-data.service';

describe('MakeDataService', () => {
  let service: MakeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
