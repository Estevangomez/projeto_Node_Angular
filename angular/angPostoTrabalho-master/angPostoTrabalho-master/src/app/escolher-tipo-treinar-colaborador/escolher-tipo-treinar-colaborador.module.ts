import { EscolherTipoTreinarColabRoutingModule } from './escolher-tipo-treinar-colaborador.routing.module';
import { EscolherTipoTreinarColaboradorComponent } from './escolher-tipo-treinar-colaborador.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [EscolherTipoTreinarColaboradorComponent],
  imports: [
    CommonModule,
    EscolherTipoTreinarColabRoutingModule
  ]
})
export class EscolherTipoTreinarColaboradorModule { }
