import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSerttingsFormComponent } from './user-serttings-form.component';

describe('UserSerttingsFormComponent', () => {
  let component: UserSerttingsFormComponent;
  let fixture: ComponentFixture<UserSerttingsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSerttingsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSerttingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
