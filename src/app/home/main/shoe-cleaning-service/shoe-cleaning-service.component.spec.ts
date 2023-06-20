import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeCleaningServiceComponent } from './shoe-cleaning-service.component';

describe('ShoeCleaningServiceComponent', () => {
  let component: ShoeCleaningServiceComponent;
  let fixture: ComponentFixture<ShoeCleaningServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoeCleaningServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoeCleaningServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
