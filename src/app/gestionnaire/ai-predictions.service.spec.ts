import { TestBed } from '@angular/core/testing';

import { AiPredictionsService } from './ai-predictions.service';

describe('AiPredictionsService', () => {
  let service: AiPredictionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiPredictionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
