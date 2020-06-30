import { TestBed } from '@angular/core/testing';

import { PaoService } from './pao.service';

describe('PaoService', () => {
  let service: PaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
