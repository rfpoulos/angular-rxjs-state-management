import { TestBed, inject } from '@angular/core/testing';

import { KeypressService } from './keypress.service';

describe('KeypressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeypressService]
    });
  });

  it('should be created', inject([KeypressService], (service: KeypressService) => {
    expect(service).toBeTruthy();
  }));
});
