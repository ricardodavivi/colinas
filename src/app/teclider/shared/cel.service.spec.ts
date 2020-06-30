import { TestBed } from '@angular/core/testing';

import { CelService } from './cel.service';

describe('CelService', () => {
  let service: CelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
