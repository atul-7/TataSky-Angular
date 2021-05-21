import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeMainComponent } from './recharge-main.component';

describe('RechargeMainComponent', () => {
  let component: RechargeMainComponent;
  let fixture: ComponentFixture<RechargeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargeMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
