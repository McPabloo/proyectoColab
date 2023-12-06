import { TestBed } from '@angular/core/testing';

import { ServiceColabService } from './service-colab.service';

describe('ServiceColabService', () => {
  let service: ServiceColabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceColabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
