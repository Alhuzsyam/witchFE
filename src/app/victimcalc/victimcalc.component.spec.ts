import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictimcalcComponent } from './victimcalc.component';

describe('VictimcalcComponent', () => {
  let component: VictimcalcComponent;
  let fixture: ComponentFixture<VictimcalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VictimcalcComponent]
    });
    fixture = TestBed.createComponent(VictimcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
