import { TestBed } from '@angular/core/testing';

import { PoilicyService } from './poilicy.service';

describe('PoilicyService', () => {
  let service: PoilicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoilicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
