import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarrComponent } from './navbarr.component';

describe('NavbarrComponent', () => {
  let component: NavbarrComponent;
  let fixture: ComponentFixture<NavbarrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarrComponent]
    });
    fixture = TestBed.createComponent(NavbarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
