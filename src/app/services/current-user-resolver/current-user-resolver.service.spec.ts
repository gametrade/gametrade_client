import { TestBed, inject } from '@angular/core/testing';

import { CurrentUserResolverService } from './current-user-resolver.service';

describe('CurrentUserResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentUserResolverService]
    });
  });

  it('should be created', inject([CurrentUserResolverService], (service: CurrentUserResolverService) => {
    expect(service).toBeTruthy();
  }));
});
