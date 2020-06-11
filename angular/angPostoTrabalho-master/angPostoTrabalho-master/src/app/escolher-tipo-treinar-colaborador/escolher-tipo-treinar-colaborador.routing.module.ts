import { EscolherTipoTreinarColaboradorComponent } from './escolher-tipo-treinar-colaborador.component';
import { TipoPostoTrabalhoComponent } from '../tipo-posto-trabalho/tipo-posto-trabalho.component';
import { TreinamentoColaboradorComponent } from '../treinamento-colaborador/treinamento-colaborador.component';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const produtoRoutes = [
    {path:'',component:EscolherTipoTreinarColaboradorComponent},  
  
   
  
];

@NgModule({
    imports:[RouterModule.forChild(produtoRoutes)],
    exports:[RouterModule]

})
export class EscolherTipoTreinarColabRoutingModule{}