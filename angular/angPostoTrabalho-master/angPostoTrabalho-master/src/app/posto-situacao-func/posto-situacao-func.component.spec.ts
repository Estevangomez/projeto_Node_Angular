import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostoSituacaoFuncComponent } from './posto-situacao-func.component';

describe('PostoSituacaoFuncComponent', () => {
  let component: PostoSituacaoFuncComponent;
  let fixture: ComponentFixture<PostoSituacaoFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostoSituacaoFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostoSituacaoFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
