import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoConfigComponent } from './produto-config.component';

describe('ProdutoConfigComponent', () => {
  let component: ProdutoConfigComponent;
  let fixture: ComponentFixture<ProdutoConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
