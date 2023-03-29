import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDiamondComponent } from './print-diamond.component';

describe('PrintDiamondComponent', () => {
  let component: PrintDiamondComponent;
  let fixture: ComponentFixture<PrintDiamondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintDiamondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintDiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
