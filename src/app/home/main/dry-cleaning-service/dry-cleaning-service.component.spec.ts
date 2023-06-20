import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryCleaningServiceComponent } from './dry-cleaning-service.component';

describe('DryCleaningServiceComponent', () => {
  let component: DryCleaningServiceComponent;
  let fixture: ComponentFixture<DryCleaningServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DryCleaningServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DryCleaningServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
