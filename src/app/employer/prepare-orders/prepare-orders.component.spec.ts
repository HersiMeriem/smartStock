import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareOrdersComponent } from './prepare-orders.component';

describe('PrepareOrdersComponent', () => {
  let component: PrepareOrdersComponent;
  let fixture: ComponentFixture<PrepareOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrepareOrdersComponent]
    });
    fixture = TestBed.createComponent(PrepareOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
