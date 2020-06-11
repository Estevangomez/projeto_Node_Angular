import { CargoService } from './../providers/cargo.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../providers/colaborador.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  formulario:any = FormGroup;
  constructor(private FormBuilder:FormBuilder,private http:HttpClient, private apiService:ApiService, private cargoService:CargoService) { }

  ngOnInit(): void {
    this.formulario = this.FormBuilder.group({
      descricao:''
     

    })

   
    
  }

  onSubmit(data){
    console.warn(data);
        
    this.cargoService.createNovoCargo(data)
    .subscribe((data:any)=>{
    
      console.warn(data);
    })
   
  }


 
 
}

