import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compnoent1Component } from './compnoent1.component';

describe('Compnoent1Component', () => {
  let component: Compnoent1Component;
  let fixture: ComponentFixture<Compnoent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Compnoent1Component]
    });
    fixture = TestBed.createComponent(Compnoent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
