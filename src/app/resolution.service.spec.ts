import { TestBed, inject } from '@angular/core/testing';

import { ResolutionService } from './resolution.service';

describe('ResolutionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolutionService]
    });
  });

  it('should be created', inject([ResolutionService], (service: ResolutionService) => {
    expect(service).toBeTruthy();
  }));
});
