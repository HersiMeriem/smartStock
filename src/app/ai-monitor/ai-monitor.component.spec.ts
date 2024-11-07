import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiMonitorComponent } from './ai-monitor.component';

describe('AiMonitorComponent', () => {
  let component: AiMonitorComponent;
  let fixture: ComponentFixture<AiMonitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiMonitorComponent]
    });
    fixture = TestBed.createComponent(AiMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
