import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WetCleaningServiceComponent } from './wet-cleaning-service.component';

describe('WetCleaningServiceComponent', () => {
  let component: WetCleaningServiceComponent;
  let fixture: ComponentFixture<WetCleaningServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WetCleaningServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WetCleaningServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
