import { TestBed } from '@angular/core/testing';

import { ManagementTblService } from './management-tbl.service';

describe('ManagementTblService', () => {
  let service: ManagementTblService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementTblService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
