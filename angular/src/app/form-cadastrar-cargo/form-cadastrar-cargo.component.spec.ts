import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastrarCargoComponent } from './form-cadastrar-cargo.component';

describe('FormCadastrarCargoComponent', () => {
  let component: FormCadastrarCargoComponent;
  let fixture: ComponentFixture<FormCadastrarCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCadastrarCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCadastrarCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
