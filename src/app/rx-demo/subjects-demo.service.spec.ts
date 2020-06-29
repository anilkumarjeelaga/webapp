import { TestBed } from '@angular/core/testing';

import { SubjectsDemoService } from './subjects-demo.service';

describe('SubjectsDemoService', () => {
  let service: SubjectsDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectsDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
