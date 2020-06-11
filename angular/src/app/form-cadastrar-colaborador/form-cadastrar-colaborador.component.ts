import { ApiService } from './../providers/colaborador.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cadastrar-colaborador',
  templateUrl: './form-cadastrar-colaborador.component.html',
  styleUrls: ['./form-cadastrar-colaborador.component.css']
})
export class FormCadastrarColaboradorComponent implements OnInit {

  formulario:any = FormGroup;
  constructor(private FormBuilder:FormBuilder,private http:HttpClient, private apiService:ApiService) { }

  ngOnInit(): void {
    this.formulario = this.FormBuilder.group({
      nome:'',
      email:'',
      telefone:'',
      empresa:'',
      id_cargo:'',
      setor:''

    })

   
    
  }

  onSubmit(data){
    this.apiService.createNovoColaborador(data)
    .subscribe((data:any)=>{
    
      console.warn(data);
    })
   
  }


 
 
}
