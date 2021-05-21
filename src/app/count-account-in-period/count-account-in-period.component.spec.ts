import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountAccountInPeriodComponent } from './count-account-in-period.component';

describe('CountAccountInPeriodComponent', () => {
  let component: CountAccountInPeriodComponent;
  let fixture: ComponentFixture<CountAccountInPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountAccountInPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountAccountInPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
