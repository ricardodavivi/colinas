import { TestBed } from '@angular/core/testing';

import { ConviteriaService } from './conviteria.service';

describe('ConviteriaService', () => {
  let service: ConviteriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConviteriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
