import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargoComponent } from './cargo.component';



@NgModule({
  declarations: [CargoComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CargoComponent
  ]
})
export class CargoModule { }
