import { TestBed } from '@angular/core/testing';

import { DndRepositoryService } from './dnd-repository.service';

describe('DndRepositoryService', () => {
  let service: DndRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DndRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
