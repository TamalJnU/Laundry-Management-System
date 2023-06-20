import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyDressComponent } from './baby-dress.component';

describe('BabyDressComponent', () => {
  let component: BabyDressComponent;
  let fixture: ComponentFixture<BabyDressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyDressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyDressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
