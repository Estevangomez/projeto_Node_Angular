import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarColaboradorComponent } from './form-editar-colaborador.component';

describe('FormEditarColaboradorComponent', () => {
  let component: FormEditarColaboradorComponent;
  let fixture: ComponentFixture<FormEditarColaboradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditarColaboradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditarColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
