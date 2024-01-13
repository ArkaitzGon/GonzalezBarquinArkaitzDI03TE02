import { TestBed } from '@angular/core/testing';

import { CapacitorPreferenceService } from './capacitor-preference.service';

describe('CapacitorPreferenceService', () => {
  let service: CapacitorPreferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapacitorPreferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
