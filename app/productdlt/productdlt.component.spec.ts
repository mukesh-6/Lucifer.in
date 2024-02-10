import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdltComponent } from './productdlt.component';

describe('ProductdltComponent', () => {
  let component: ProductdltComponent;
  let fixture: ComponentFixture<ProductdltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductdltComponent]
    });
    fixture = TestBed.createComponent(ProductdltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
