import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayUserComponent } from './display-user.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { User } from './user';

describe('DisplayUserComponent', () => {
  let component: DisplayUserComponent;
  let fixture: ComponentFixture<DisplayUserComponent>;
  let debugElement:DebugElement;

  beforeEach(async () => {
    // waiting for test to create environment
    await TestBed.configureTestingModule({
      declarations: [ DisplayUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUserComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should have user User(111,'Shivam',23)", ()=>{
    let user:User=new User(111,'Shivam',23);
    expect(component.user).toEqual(user);
  });
  it("should render content", ()=>{
    let user:User=new User(111,'Shivam',23);
    expect(debugElement.query(By.css("h1")).nativeElement.innerText).toContain("User info");
    expect(debugElement.query(By.css("#userid")).nativeElement.innerText).toContain("id is 111");
    expect(debugElement.query(By.css("#username")).nativeElement.innerText).toContain("name is Shivam");
    expect(debugElement.query(By.css("#age")).nativeElement.innerText).toContain("age is 23");
    
  });
});
