import { TestBed } from '@angular/core/testing';

import { ComponentInjectorService } from './component-injector.service';

describe('ComponentInjectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentInjectorService = TestBed.get(ComponentInjectorService);
    expect(service).toBeTruthy();
  });
});
