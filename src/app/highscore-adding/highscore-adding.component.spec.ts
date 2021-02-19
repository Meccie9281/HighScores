import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighscoreAddingComponent } from './highscore-adding.component';

describe('HighscoreAddingComponent', () => {
  let component: HighscoreAddingComponent;
  let fixture: ComponentFixture<HighscoreAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighscoreAddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighscoreAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
