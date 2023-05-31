import { TestBed } from '@angular/core/testing';

import { MasjidServiceService } from './masjid-service.service';

describe('MasjidServiceService', () => {
  let service: MasjidServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasjidServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
