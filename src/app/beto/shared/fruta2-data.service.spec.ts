import { TestBed } from '@angular/core/testing';

import { Fruta2DataService } from './fruta2-data.service';

describe('Fruta2DataService', () => {
  let service: Fruta2DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fruta2DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
