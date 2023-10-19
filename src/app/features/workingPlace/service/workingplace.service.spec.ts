import { TestBed } from '@angular/core/testing';

import { WorkingplaceService } from './workingplace.service';

describe('WorkingplaceService', () => {
  let service: WorkingplaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkingplaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
