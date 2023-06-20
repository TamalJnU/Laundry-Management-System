import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashServiceComponent } from './wash-service.component';

describe('WashServiceComponent', () => {
  let component: WashServiceComponent;
  let fixture: ComponentFixture<WashServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WashServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
