import { TestBed } from '@angular/core/testing';

import { DrycleanService } from './dryclean.service';

describe('DrycleanService', () => {
  let service: DrycleanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrycleanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
