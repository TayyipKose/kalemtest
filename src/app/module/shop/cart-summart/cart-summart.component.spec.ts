import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSummartComponent } from './cart-summart.component';

describe('CartSummartComponent', () => {
  let component: CartSummartComponent;
  let fixture: ComponentFixture<CartSummartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSummartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSummartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
