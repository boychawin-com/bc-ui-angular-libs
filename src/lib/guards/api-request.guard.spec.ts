import { TestBed, async, inject } from '@angular/core/testing';
import { ApiRequestGuard } from './api-request.guard';

describe('ApiRequestGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiRequestGuard]
    });
  });

  it('should ...', inject([ApiRequestGuard], (guard: ApiRequestGuard) => {
    expect(guard).toBeTruthy();
  }));
});
