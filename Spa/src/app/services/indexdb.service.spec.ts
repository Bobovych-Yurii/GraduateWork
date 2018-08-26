import { TestBed, inject } from '@angular/core/testing';

import { IndexdbService } from './indexdb.service';

describe('Indexdb.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexdbService]
    });
  });

  it('should be created', inject([IndexdbService], (service: IndexdbService) => {
    expect(service).toBeTruthy();
  }));
});
