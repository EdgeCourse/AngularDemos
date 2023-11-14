import { TestBed } from '@angular/core/testing';

import { CancellableService } from './cancellable.service';

describe('CancellableService', () => {
  let service: CancellableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancellableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
