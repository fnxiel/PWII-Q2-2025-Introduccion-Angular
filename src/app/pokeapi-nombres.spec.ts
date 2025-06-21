import { TestBed } from '@angular/core/testing';

import { PokeapiNombres } from './pokeapi-nombres';

describe('PokeapiNombres', () => {
  let service: PokeapiNombres;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeapiNombres);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
