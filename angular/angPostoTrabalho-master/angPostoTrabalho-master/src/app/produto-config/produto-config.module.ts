import { ProdutoConfigRoutingModule } from './produto-config.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ProdutoConfigComponent } from './produto-config.component';



@NgModule({
  declarations: [ProdutoConfigComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProdutoConfigRoutingModule,
    FormsModule
  ]
})
export class ProdutoConfigModule { }
