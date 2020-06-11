import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoBibliotecaComponent } from './produto-biblioteca.component';

describe('ProdutoBibliotecaComponent', () => {
  let component: ProdutoBibliotecaComponent;
  let fixture: ComponentFixture<ProdutoBibliotecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoBibliotecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
