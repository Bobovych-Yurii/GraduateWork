import { TestBed, inject } from '@angular/core/testing';

import { DictionaryProviderService } from './dictionary.provider.service';

describe('DictionaryProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictionaryProviderService]
    });
  });

  it('should be created', inject([DictionaryProviderService], (service: DictionaryProviderService) => {
    expect(service).toBeTruthy();
  }));
});
