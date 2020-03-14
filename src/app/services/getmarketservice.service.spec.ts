import { TestBed } from '@angular/core/testing';

import { GetmarketserviceService } from './getmarketservice.service';

describe('GetmarketserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetmarketserviceService = TestBed.get(GetmarketserviceService);
    expect(service).toBeTruthy();
  });
});
