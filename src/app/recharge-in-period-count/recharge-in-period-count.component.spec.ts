import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeInPeriodCountComponent } from './recharge-in-period-count.component';

describe('RechargeInPeriodCountComponent', () => {
  let component: RechargeInPeriodCountComponent;
  let fixture: ComponentFixture<RechargeInPeriodCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargeInPeriodCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeInPeriodCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
