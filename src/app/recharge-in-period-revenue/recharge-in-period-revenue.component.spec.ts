import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeInPeriodRevenueComponent } from './recharge-in-period-revenue.component';

describe('RechargeInPeriodRevenueComponent', () => {
  let component: RechargeInPeriodRevenueComponent;
  let fixture: ComponentFixture<RechargeInPeriodRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargeInPeriodRevenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeInPeriodRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
