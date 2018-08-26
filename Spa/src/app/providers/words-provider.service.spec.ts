import { TestBed, inject } from '@angular/core/testing';

import { WordsProviderService } from './words-provider.service';

describe('WordsProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordsProviderService]
    });
  });

  it('should be created', inject([WordsProviderService], (service: WordsProviderService) => {
    expect(service).toBeTruthy();
  }));
});
