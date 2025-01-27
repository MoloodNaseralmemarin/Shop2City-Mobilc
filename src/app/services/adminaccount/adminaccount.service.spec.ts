import { TestBed } from '@angular/core/testing';

import { AdminaccountService } from './adminaccount.service';

describe('AdminaccountService', () => {
  let service: AdminaccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminaccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
