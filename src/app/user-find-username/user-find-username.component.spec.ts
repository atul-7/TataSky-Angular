import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFindUsernameComponent } from './user-find-username.component';

describe('UserFindUsernameComponent', () => {
  let component: UserFindUsernameComponent;
  let fixture: ComponentFixture<UserFindUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFindUsernameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFindUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
