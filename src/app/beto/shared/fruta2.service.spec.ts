import { TestBed } from '@angular/core/testing';

import { Fruta2Service } from './fruta2.service';

describe('Fruta2Service', () => {
  let service: Fruta2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fruta2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
