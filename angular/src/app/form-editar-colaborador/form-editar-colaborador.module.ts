import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormEditarColaboradorComponent } from './form-editar-colaborador.component';



@NgModule({
  declarations: [FormEditarColaboradorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    FormEditarColaboradorComponent,
    ReactiveFormsModule,
  ]
})


export class FormEditarColaboradorModule { }
