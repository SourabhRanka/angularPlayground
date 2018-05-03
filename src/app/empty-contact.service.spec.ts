import { TestBed, inject } from '@angular/core/testing';

import { EmptyContactService } from './empty-contact.service';

describe('EmptyContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmptyContactService]
    });
  });

  it('should be created', inject([EmptyContactService], (service: EmptyContactService) => {
    expect(service).toBeTruthy();
  }));
});
