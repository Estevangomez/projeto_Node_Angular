import { ProdutoListarComponent } from './produto-listar/produto-listar.component';
import { ProdutoConfigComponent } from '../produto-config/produto-config.component';

import { ProdutoComponent } from './produto.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const produtoRoutes = [
    {path:'',component:ProdutoComponent},
    {path:'produto/:id',component:ProdutoComponent},  
  
   // {path:'configurar-produto',component:ProdutoConfigComponent},
  
];

@NgModule({
    imports:[RouterModule.forChild(produtoRoutes)],
    exports:[RouterModule]

})
export class ProdutoRoutingModule{}