import { FormCadastrarColaboradorComponent } from './form-cadastrar-colaborador.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';



@NgModule({
  declarations: [FormCadastrarColaboradorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    FormCadastrarColaboradorComponent,
    ReactiveFormsModule
  ]
})
export class FormCadastrarColaboradorModule { }
