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
  colaborador:any;
  colaboradores:any = [];
  cargos:any = [];
  cargo:any = [];
  constructor(private ApiService:ApiService,private CargoService:CargoService, private endPoint:UtilsService,private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ApiService.getAllColaborador()
    .subscribe((data:any)=>{
     this.colaboradores = data.result; 
     console.log(this.colaboradores);
       
           
    })

    this.CargoService.getBeanCargo(this.idcargo)
    .subscribe((data:any)=>{
     this.cargo = data.result;           
    })

  }
  cadastrarColaborador(){
    this.router.navigate(['/colaborador/inserir']);	
  }

  cadastrarCargo(){
    this.router.navigate(['/cargo/inserir']);	
  }

  removerColaborador(idcolaborador){
   if (confirm("Confirma Excluir Colaborador ?")){
      this.ApiService.removerColaborador(idcolaborador)
    .subscribe((data:any)=>{
      location.reload();
    })
   	
    }    

  }

  graficoMostrar(){
    this.router.navigate(['/grafico']);
  }

  getBeanCargo(idcargo){
    console.log("aqui");
    
  }

  getBeanColaborador(idcolaborador){  
    this.router.navigate(['colaborador/editar'], { queryParams: { idcolaborador: idcolaborador } });   

  }
  

}
