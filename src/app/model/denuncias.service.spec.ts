import { TestBed } from '@angular/core/testing';

import { DenunciasService } from './denuncias.service';

describe('DenunciasService', () => {
  let service: DenunciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DenunciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
