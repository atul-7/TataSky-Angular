import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountRechargeComponent } from './count-recharge.component';

describe('CountRechargeComponent', () => {
  let component: CountRechargeComponent;
  let fixture: ComponentFixture<CountRechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountRechargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
