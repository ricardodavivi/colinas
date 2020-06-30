import { TestBed } from '@angular/core/testing';

import { MoveisDataService } from './moveis-data.service';

describe('MoveisDataService', () => {
  let service: MoveisDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoveisDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
