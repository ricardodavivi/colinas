import { TestBed } from '@angular/core/testing';

import { PanelaDataService } from './panela-data.service';

describe('PanelaDataService', () => {
  let service: PanelaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
