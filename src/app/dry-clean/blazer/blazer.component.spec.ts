import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazerComponent } from './blazer.component';

describe('BlazerComponent', () => {
  let component: BlazerComponent;
  let fixture: ComponentFixture<BlazerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlazerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
