import { TestBed } from '@angular/core/testing';

import { MapServService } from './map-serv.service';

describe('MapServService', () => {
  let service: MapServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
