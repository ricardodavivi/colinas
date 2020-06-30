import { TestBed } from '@angular/core/testing';

import { AvonService } from './avon.service';

describe('AvonService', () => {
  let service: AvonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
