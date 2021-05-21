import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescRechargeComponent } from './desc-recharge.component';

describe('DescRechargeComponent', () => {
  let component: DescRechargeComponent;
  let fixture: ComponentFixture<DescRechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescRechargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
