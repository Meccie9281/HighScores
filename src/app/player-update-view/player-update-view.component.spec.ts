import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerUpdateViewComponent } from './player-update-view.component';

describe('PlayerUpdateViewComponent', () => {
  let component: PlayerUpdateViewComponent;
  let fixture: ComponentFixture<PlayerUpdateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerUpdateViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerUpdateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
