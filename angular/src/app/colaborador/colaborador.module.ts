import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradorComponent } from './colaborador.component';



@NgModule({
  declarations: [ColaboradorComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ColaboradorComponent,
    RouterModule
  ]
})
export class ColaboradorModule { }
