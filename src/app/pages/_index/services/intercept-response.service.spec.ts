import { TestBed, inject } from '@angular/core/testing';

import { InterceptResponseService } from './intercept-response.service';

describe('InterceptResponseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptResponseService]
    });
  });

  it('should be created', inject([InterceptResponseService], (service: InterceptResponseService) => {
    expect(service).toBeTruthy();
  }));
});
