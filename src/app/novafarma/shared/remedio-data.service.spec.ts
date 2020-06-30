import { TestBed } from '@angular/core/testing';

import { RemedioDataService } from './remedio-data.service';

describe('RemedioDataService', () => {
  let service: RemedioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemedioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
