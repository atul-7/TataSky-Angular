import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeleteIdComponent } from './user-delete-id.component';

describe('UserDeleteIdComponent', () => {
  let component: UserDeleteIdComponent;
  let fixture: ComponentFixture<UserDeleteIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeleteIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeleteIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
