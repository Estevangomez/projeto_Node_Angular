import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

import { ApiService } from '../providers/colaborador.service';
import { CargoService } from '../providers/cargo.service';
import { UtilsService } from '../utils/utils.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[];
  public pieChartData: SingleDataSet = [30,40];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  qtdColaboradores:any;
  totalColaboradores:any;
  cargos:any;
  qtdColaboradoresByCargo:any;
  vetor = [];
  porcentagem:any;

  constructor(private ApiService:ApiService,private CargoService:CargoService, private endPoint:UtilsService,private router: Router, private route:ActivatedRoute) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  } 

  ngOnInit(): void {

    this.ApiService.getTotalColaboradores()
    .subscribe((data:any)=>{
     this.qtdColaboradores = data.result;
     this.totalColaboradores = this.qtdColaboradores[0]['totalColaboradores'] 

     console.log("QtdColaboradores == ",this.qtdColaboradores);
     
               
    })

    this.CargoService.getAllCargo().subscribe((data:any)=>{
        this.cargos = data.result;
        this.cargos.forEach(cargo => {         
                 
          this.pieChartLabels =  [[cargo['descricao']], [cargo['descricao']], cargo['descricao']];

          this.ApiService.getQtdColaboradorByCargo(cargo['id_cargo']).subscribe((data:any)=>{
            this.qtdColaboradoresByCargo = data.result;

            this.qtdColaboradoresByCargo.forEach(qtdByCargo => {
              
             //this.pieChartData = qtdByCargo;

                this.vetor = [cargo['descricao'],qtdByCargo['cargo']];

                  console.log("ChartLabels == ",this.vetor[0]);
                  console.log("Chartdata == ",this.vetor[1]);
                  
               
                


                this.porcentagem = (this.vetor[1]/this.totalColaboradores)*100;
              
                console.log("Porcentagem == ",this.porcentagem);
                
                  
                });
            
           
            
          })

        
        });
       
        
       
    })







  }
  

}
