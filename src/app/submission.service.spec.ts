import { TestBed, inject } from '@angular/core/testing';

import { SubmissionService } from './submission.service';

describe('SubmissionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubmissionService]
    });
  });

  it('should be created', inject([SubmissionService], (service: SubmissionService) => {
    expect(service).toBeTruthy();
  }));
});
