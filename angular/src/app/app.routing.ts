import { FormCadastrarColaboradorComponent } from './form-cadastrar-colaborador/form-cadastrar-colaborador.component';
import { ModuleWithProviders } from '@angular/core';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { Routes, RouterModule } from '@angular/router';
import { CargoComponent } from './cargo/cargo.component';

const APP_ROUTES: Routes = [
    {path:'colaborador',component:ColaboradorComponent},
    {path:'colaborador/inserir',component:FormCadastrarColaboradorComponent},
    {path:'cargo',component:CargoComponent},

];

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);