import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyShirtComponent } from './baby-shirt.component';

describe('BabyShirtComponent', () => {
  let component: BabyShirtComponent;
  let fixture: ComponentFixture<BabyShirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyShirtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
