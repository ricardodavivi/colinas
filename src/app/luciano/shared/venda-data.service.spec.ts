import { TestBed } from '@angular/core/testing';

import { VendaDataService } from './venda-data.service';

describe('VendaDataService', () => {
  let service: VendaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
