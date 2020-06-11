import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoConfigComponent } from '../produto-config/produto-config.component';
import { ProdutoConfigLinhaComponent } from '../produto-config-linha/produto-config-linha.component';



const routes: Routes = [
  {
   
   path:'configurar-produto',
   component:ProdutoConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoConfigRoutingModule { }