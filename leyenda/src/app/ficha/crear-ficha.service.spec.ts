import { TestBed } from '@angular/core/testing';

import { CrudService } from './crear-ficha.service';

describe('CrearFichaService', () => {
  let service: CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
