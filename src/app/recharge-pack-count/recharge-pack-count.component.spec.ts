import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargePackCountComponent } from './recharge-pack-count.component';

describe('RechargePackCountComponent', () => {
  let component: RechargePackCountComponent;
  let fixture: ComponentFixture<RechargePackCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargePackCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargePackCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
