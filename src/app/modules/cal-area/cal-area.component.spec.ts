import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalAreaComponent } from './cal-area.component';

describe('CalAreaComponent', () => {
  let component: CalAreaComponent;
  let fixture: ComponentFixture<CalAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
