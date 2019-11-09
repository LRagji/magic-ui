import { TestBed } from '@angular/core/testing';

import { ElementsRepoService } from './elements-repo.service';

describe('ElementsRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementsRepoService = TestBed.get(ElementsRepoService);
    expect(service).toBeTruthy();
  });
});
