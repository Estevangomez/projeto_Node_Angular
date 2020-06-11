import { Colaborador } from './../interfaces/colaborador';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,FormBuilder } from "@angular/forms";
import { ApiService } from '../providers/colaborador.service';
import { CargoService } from '../providers/cargo.service';
import { UtilsService } from '../utils/utils.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html'
})


export class ColaboradorComponent implements OnInit {
  idcargo:any;
  colaboradores:any = [];
  cargos:any = [];
  cargo:any = [];
  constructor(private ApiService:ApiService,private CargoService:CargoService, private endPoint:UtilsService,private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ApiService.getAllColaborador()
    .subscribe((data:any)=>{
     this.colaboradores = data.result;   
           
    })

    this.CargoService.getBeanCargo(this.idcargo)
    .subscribe((data:any)=>{
     this.cargo = data.result;           
    })

  }
  cadastrarColaborador(){
    this.router.navigate(['/colaborador/inserir']);	
  }

  removerColaborador(idcolaborador){

    this.ApiService.removerColaborador(idcolaborador)
    .subscribe((data:any)=>{
    
      console.warn(data);
    })

    

  }
  

}
