import { TestBed } from '@angular/core/testing';

import { PanelaService } from './panela.service';

describe('PanelaService', () => {
  let service: PanelaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
