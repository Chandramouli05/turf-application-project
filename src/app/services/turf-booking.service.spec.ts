import { TestBed } from '@angular/core/testing';

import { TurfBookingService } from './turf-booking.service';

describe('TurfBookingService', () => {
  let service: TurfBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurfBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
