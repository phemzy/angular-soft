import { TestBed, async, inject } from '@angular/core/testing';

import { ComponentGuardGuard } from './component-guard.guard';

describe('ComponentGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentGuardGuard]
    });
  });

  it('should ...', inject([ComponentGuardGuard], (guard: ComponentGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
