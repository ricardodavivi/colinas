import { TestBed } from '@angular/core/testing';

import { EspumaService } from './espuma.service';

describe('EspumaService', () => {
  let service: EspumaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspumaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
