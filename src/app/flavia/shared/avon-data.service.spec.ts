import { TestBed } from '@angular/core/testing';

import { AvonDataService } from './avon-data.service';

describe('AvonDataService', () => {
  let service: AvonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
