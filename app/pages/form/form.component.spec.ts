import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { By } from '@angular/platform-browser';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
         imports: [ReactiveFormsModule, FormsModule],
      declarations: [ FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


 it('name field validity', () => {
    let name = component.name;
    name.setValue(null);
    expect(name.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.emailid;
    email.setValue(null);
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

it('username field validity', () => {
    let username = component.username;
    expect(username.valid).toBeTruthy(); 
  });


});
