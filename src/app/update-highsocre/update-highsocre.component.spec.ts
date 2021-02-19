import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHighsocreComponent } from './update-highsocre.component';

describe('UpdateHighsocreComponent', () => {
  let component: UpdateHighsocreComponent;
  let fixture: ComponentFixture<UpdateHighsocreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHighsocreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHighsocreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
