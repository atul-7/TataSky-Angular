import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRechargeComponent } from './update-recharge.component';

describe('UpdateRechargeComponent', () => {
  let component: UpdateRechargeComponent;
  let fixture: ComponentFixture<UpdateRechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRechargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
