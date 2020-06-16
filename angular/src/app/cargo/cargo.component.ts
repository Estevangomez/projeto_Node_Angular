import { CargoService } from './../providers/cargo.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../providers/colaborador.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  formulario:any = FormGroup;
  constructor( private router: Router,private FormBuilder:FormBuilder,private http:HttpClient, private apiService:ApiService, private cargoService:CargoService) { }

  ngOnInit(): void {
    this.formulario = this.FormBuilder.group({
      descricao:''
     

    })

   
    
  }

  onSubmit(data){
   if(confirm("Confirma cadastro de novo Cargo ? ")){
    this.cargoService.createNovoCargo(data)
    .subscribe((data:any)=>{
    
     alert("Cargo Cadastrado com sucesso");
     this.router.navigate(['/colaborador']);
    })
   
   }
   
   
  }


 
 
}

