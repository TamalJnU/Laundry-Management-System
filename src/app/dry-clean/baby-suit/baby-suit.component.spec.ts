import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabySuitComponent } from './baby-suit.component';

describe('BabySuitComponent', () => {
  let component: BabySuitComponent;
  let fixture: ComponentFixture<BabySuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabySuitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabySuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
