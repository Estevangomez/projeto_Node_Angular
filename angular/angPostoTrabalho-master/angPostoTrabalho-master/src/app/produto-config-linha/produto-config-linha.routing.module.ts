import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoConfigLinhaComponent } from '../produto-config-linha/produto-config-linha.component';



const routes: Routes = [
  {
   
   path:'associar-produto-a-linha',
   component:ProdutoConfigLinhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoConfigLinhaRoutingModule { }