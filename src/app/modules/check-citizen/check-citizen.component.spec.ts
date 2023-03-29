import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCitizenComponent } from './check-citizen.component';

describe('CheckCitizenComponent', () => {
  let component: CheckCitizenComponent;
  let fixture: ComponentFixture<CheckCitizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCitizenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckCitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
