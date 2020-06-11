import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastrarColaboradorComponent } from './form-cadastrar-colaborador.component';

describe('FormCadastrarColaboradorComponent', () => {
  let component: FormCadastrarColaboradorComponent;
  let fixture: ComponentFixture<FormCadastrarColaboradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCadastrarColaboradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCadastrarColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
