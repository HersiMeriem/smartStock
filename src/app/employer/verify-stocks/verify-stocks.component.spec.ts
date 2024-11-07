import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyStocksComponent } from './verify-stocks.component';

describe('VerifyStocksComponent', () => {
  let component: VerifyStocksComponent;
  let fixture: ComponentFixture<VerifyStocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyStocksComponent]
    });
    fixture = TestBed.createComponent(VerifyStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
