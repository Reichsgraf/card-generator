import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShirtComponent } from './card-shirt.component';

describe('CardShirtComponent', () => {
  let component: CardShirtComponent;
  let fixture: ComponentFixture<CardShirtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardShirtComponent],
    });
    fixture = TestBed.createComponent(CardShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
