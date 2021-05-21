import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenedServiceComponent } from './opened-service.component';

describe('OpenedServiceComponent', () => {
  let component: OpenedServiceComponent;
  let fixture: ComponentFixture<OpenedServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenedServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
