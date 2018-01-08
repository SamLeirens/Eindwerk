import { TestBed, inject } from '@angular/core/testing';

import { GroepService } from './groep.service';

describe('GroepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroepService]
    });
  });

  it('should be created', inject([GroepService], (service: GroepService) => {
    expect(service).toBeTruthy();
  }));
});
