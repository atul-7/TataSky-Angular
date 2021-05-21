import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargesInPeriodComponent } from './recharges-in-period.component';

describe('RechargesInPeriodComponent', () => {
  let component: RechargesInPeriodComponent;
  let fixture: ComponentFixture<RechargesInPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargesInPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargesInPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
