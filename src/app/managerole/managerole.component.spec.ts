import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageroleComponent } from './managerole.component';

describe('ManageroleComponent', () => {
  let component: ManageroleComponent;
  let fixture: ComponentFixture<ManageroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
