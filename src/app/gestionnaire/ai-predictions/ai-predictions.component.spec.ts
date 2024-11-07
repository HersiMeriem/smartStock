import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPredictionsComponent } from './ai-predictions.component';

describe('AiPredictionsComponent', () => {
  let component: AiPredictionsComponent;
  let fixture: ComponentFixture<AiPredictionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiPredictionsComponent]
    });
    fixture = TestBed.createComponent(AiPredictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
