import { EscolherAtividadeComponent } from './escolher-atividade.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { TreinarLiderComponent } from './treinar-lider/treinar-lider.component';


const routes: Routes = [
  {
    path: '',
    component: EscolherAtividadeComponent
  },
  {
    path: 'treinar-lider',
    component: TreinarLiderComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscolherAtividadeRoutingModule { }