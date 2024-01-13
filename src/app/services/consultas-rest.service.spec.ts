import { TestBed } from '@angular/core/testing';

import { ConsultasRestService } from './consultas-rest.service';

describe('ConsultasRestService', () => {
  let service: ConsultasRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultasRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
