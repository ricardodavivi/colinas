import { TestBed } from '@angular/core/testing';

import { EspumaDataService } from './espuma-data.service';

describe('EspumaDataService', () => {
  let service: EspumaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspumaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
