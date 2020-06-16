import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficoComponent } from './grafico.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [GraficoComponent],
  imports: [
    CommonModule,
    ChartsModule
  ]
})
export class GraficoModule { }
