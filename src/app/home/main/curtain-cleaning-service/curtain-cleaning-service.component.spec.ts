import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtainCleaningServiceComponent } from './curtain-cleaning-service.component';

describe('CurtainCleaningServiceComponent', () => {
  let component: CurtainCleaningServiceComponent;
  let fixture: ComponentFixture<CurtainCleaningServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurtainCleaningServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurtainCleaningServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
