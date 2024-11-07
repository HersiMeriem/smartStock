import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsComponent } from './produit.component';

describe('ProduitComponent', () => {
  let component: ProduitsComponent;
  let fixture: ComponentFixture<ProduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitsComponent]
    });
    fixture = TestBed.createComponent(ProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
