import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ProdutoListarComponent } from './produto-listar/produto-listar.component';
import { ProdutoRoutingModule } from './produto.routing.mudule';






@NgModule({
  declarations: [
    ProdutoComponent,    
    ProdutoListarComponent    
    
  ],
  exports:[ProdutoComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[]
})
export class ProdutoModule { }
