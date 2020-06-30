import { TestBed } from '@angular/core/testing';

import { SushiDataService } from './sushi-data.service';

describe('SushiDataService', () => {
  let service: SushiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SushiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
