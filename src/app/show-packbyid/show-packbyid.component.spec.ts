import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPackbyidComponent } from './show-packbyid.component';

describe('ShowPackbyidComponent', () => {
  let component: ShowPackbyidComponent;
  let fixture: ComponentFixture<ShowPackbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPackbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPackbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
