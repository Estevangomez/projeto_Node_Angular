import { ListPostosAssociadosComponent } from './../list-postos-associados/list-postos-associados.component';
import { FinalizarPostoAutomaticoComponent } from './../finalizar-posto-automatico/finalizar-posto-automatico.component';
import { FinalizarPostoComponent } from '../finalizar-posto/finalizar-posto.component';
import { TreinamentoLiderComponent } from './../treinamento-lider/treinamento-lider.component';
import { TreinamentoColaboradorComponent } from '../treinamento-colaborador/treinamento-colaborador.component';
import { PostoTrabalhoRoutingModule } from './posto-trabalho-routing.module';
import { FinalizarPostoAutLinhaComponent } from './../finalizar-posto-aut-linha/finalizar-posto-aut-linha.component';
import { TipoPostoTrabalhoComponent } from './../tipo-posto-trabalho/tipo-posto-trabalho.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//import { HttpClient } from '@angular/common/http';
import { PostoTrabalhoComponent } from './posto-trabalho.component';





@NgModule({
  declarations: [
    PostoTrabalhoComponent,
    TreinamentoColaboradorComponent,
    TipoPostoTrabalhoComponent,
    FinalizarPostoAutLinhaComponent,
    TreinamentoLiderComponent,
    FinalizarPostoComponent,
    ListPostosAssociadosComponent,
    FinalizarPostoAutomaticoComponent    
    
  ],
  exports:[PostoTrabalhoComponent],
  imports: [
    CommonModule,
    FormsModule,
    PostoTrabalhoRoutingModule,
    DropDownsModule,
    ReactiveFormsModule,
    MatCheckboxModule
    
    
  ],
  providers:[]
})
export class PostoTrabalhoModule { }
