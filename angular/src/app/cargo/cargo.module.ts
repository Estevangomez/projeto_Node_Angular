import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargoComponent } from './cargo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CargoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports:[
    CargoComponent,
    ReactiveFormsModule
  ]
})
export class CargoModule { }
