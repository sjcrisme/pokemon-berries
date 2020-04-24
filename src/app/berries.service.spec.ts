import { TestBed } from '@angular/core/testing';

import { BerriesService } from './berries.service';

describe('BerriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BerriesService = TestBed.get(BerriesService);
    expect(service).toBeTruthy();
  });
});
