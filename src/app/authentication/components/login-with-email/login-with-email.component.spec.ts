import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithEmailComponent } from './login-with-email.component';

describe('LoginWithEmailComponent', () => {
  let component: LoginWithEmailComponent;
  let fixture: ComponentFixture<LoginWithEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
