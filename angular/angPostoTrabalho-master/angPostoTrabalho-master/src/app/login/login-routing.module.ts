import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormLoginComponent } from './form-login/form-login.component';

const routes: Routes = [
  {
    path: '',
    component: FormLoginComponent
  },
  {
    path: 'login',
    component: FormLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }