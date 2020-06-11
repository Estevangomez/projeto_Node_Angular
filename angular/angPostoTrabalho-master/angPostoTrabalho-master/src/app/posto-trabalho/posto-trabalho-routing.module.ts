import { FinalizarPostoAutomaticoComponent } from './../finalizar-posto-automatico/finalizar-posto-automatico.component';
import { ListPostosAssociadosComponent } from './../list-postos-associados/list-postos-associados.component';
import { FinalizarPostoComponent } from '../finalizar-posto/finalizar-posto.component';
import { TreinamentoLiderComponent } from './../treinamento-lider/treinamento-lider.component';
import { TreinamentoColaboradorComponent } from './../treinamento-colaborador/treinamento-colaborador.component';
import { FinalizarPostoAutLinhaComponent } from './../finalizar-posto-aut-linha/finalizar-posto-aut-linha.component';
import { TipoPostoTrabalhoComponent } from './../tipo-posto-trabalho/tipo-posto-trabalho.component';
import { PostoTrabalhoComponent } from './posto-trabalho.component';






import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const produtoRoutes = [
    {path:'',component:PostoTrabalhoComponent},  
    {path:'treinamentoColaborador',component:TreinamentoColaboradorComponent},
    {path:'treinamentoLider',component:TreinamentoLiderComponent},
    {path:'finalizar-posto',component:FinalizarPostoComponent},
    {path:'tipo',component:TipoPostoTrabalhoComponent},
    {path:'finalizar-posto-aut-linha',component:FinalizarPostoAutLinhaComponent},
    {path:'finalizar-posto-automatico',component:FinalizarPostoAutomaticoComponent},
    {path:'list-postos-associados',component:ListPostosAssociadosComponent},
  
];

@NgModule({
    imports:[RouterModule.forChild(produtoRoutes)],
    exports:[RouterModule]

})
export class PostoTrabalhoRoutingModule{}