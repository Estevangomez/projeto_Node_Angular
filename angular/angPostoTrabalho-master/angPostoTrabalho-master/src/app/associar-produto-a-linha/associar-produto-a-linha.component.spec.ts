import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociarProdutoALinhaComponent } from './associar-produto-a-linha.component';

describe('AssociarProdutoALinhaComponent', () => {
  let component: AssociarProdutoALinhaComponent;
  let fixture: ComponentFixture<AssociarProdutoALinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociarProdutoALinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociarProdutoALinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
