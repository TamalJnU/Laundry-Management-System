import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreePieceComponent } from './three-piece.component';

describe('ThreePieceComponent', () => {
  let component: ThreePieceComponent;
  let fixture: ComponentFixture<ThreePieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreePieceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
