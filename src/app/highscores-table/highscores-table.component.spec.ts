import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighscoresTableComponent } from './highscores-table.component';

describe('HighscoresTableComponent', () => {
  let component: HighscoresTableComponent;
  let fixture: ComponentFixture<HighscoresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighscoresTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighscoresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
