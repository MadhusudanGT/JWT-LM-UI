import { TestBed } from '@angular/core/testing';

import { JwtClientServiceService } from './jwt-client-service.service';

describe('JwtClientServiceService', () => {
  let service: JwtClientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtClientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
