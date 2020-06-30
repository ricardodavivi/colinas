import { TestBed } from '@angular/core/testing';

import { RacaoService } from './racao.service';

describe('RacaoService', () => {
  let service: RacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
