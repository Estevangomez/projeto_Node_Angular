import { Component, OnInit } from '@angular/core';
import { ApiService } from './../providers/colaborador.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form-editar-colaborador',
  templateUrl: './form-editar-colaborador.component.html',
  styleUrls: ['./form-editar-colaborador.component.css']
})
export class FormEditarColaboradorComponent implements OnInit {
  idcolaborador:any;
  formulario:any = FormGroup;
  colaborador:any;
  nome:any
  telefone:any
  email:any
  empresa:any
  setor:any
  id_cargo:any
  constructor(private FormBuilder:FormBuilder,private http:HttpClient, private apiService:ApiService,private router: Router, private route:ActivatedRoute) {

   
    this.route.queryParams.subscribe(params => {
        this.idcolaborador = params['idcolaborador'];

        this.apiService.getBeanColaborador(this.idcolaborador)
        .subscribe((data:any)=>{
          this.colaborador = data.result;
          this.nome =  this.colaborador[0].nome;
          this.telefone =  this.colaborador[0].telefone;
          this.email =  this.colaborador[0].email;
          this.empresa =  this.colaborador[0].empresa;
          this.setor =  this.colaborador[0].setor;
          this.id_cargo =  this.colaborador[0].id_cargo;
          this.idcolaborador =  this.colaborador[0].codigo;;
          console.warn( this.colaborador);


         
         
        })
       
    });
   }


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

  onSubmit(info){
    console.warn(info);
    
    this.apiService.editarColaborador(info,this.idcolaborador)
    .subscribe((data:any)=>{    
     alert("Colaborador Atualizado com sucesso");
    })
   
  }

  salvarUpdateColaborador(){

  }
 
 
}
