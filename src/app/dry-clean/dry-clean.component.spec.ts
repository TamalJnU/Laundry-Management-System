import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryCleanComponent } from './dry-clean.component';

describe('DryCleanComponent', () => {
  let component: DryCleanComponent;
  let fixture: ComponentFixture<DryCleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DryCleanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DryCleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
