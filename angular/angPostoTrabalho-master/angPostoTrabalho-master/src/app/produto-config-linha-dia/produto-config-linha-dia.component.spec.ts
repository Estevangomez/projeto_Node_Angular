import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoConfigLinhaDiaComponent } from './produto-config-linha-dia.component';

describe('ProdutoConfigLinhaDiaComponent', () => {
  let component: ProdutoConfigLinhaDiaComponent;
  let fixture: ComponentFixture<ProdutoConfigLinhaDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoConfigLinhaDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoConfigLinhaDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
