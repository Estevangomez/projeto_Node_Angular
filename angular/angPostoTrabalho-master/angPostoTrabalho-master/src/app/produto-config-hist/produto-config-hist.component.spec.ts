import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoConfigHistComponent } from './produto-config-hist.component';

describe('ProdutoConfigHistComponent', () => {
  let component: ProdutoConfigHistComponent;
  let fixture: ComponentFixture<ProdutoConfigHistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoConfigHistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoConfigHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
