import { TestBed, inject } from '@angular/core/testing';

import { AdbService } from './adb.service';

describe('AdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdbService]
    });
  });

  it('should be created', inject([AdbService], (service: AdbService) => {
    expect(service).toBeTruthy();
  }));
});
