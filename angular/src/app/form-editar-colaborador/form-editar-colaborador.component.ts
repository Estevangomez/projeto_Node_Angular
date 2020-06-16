import { CargoService } from './../providers/cargo.service';
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
  cargos:any;

  constructor(private FormBuilder:FormBuilder,private http:HttpClient, private apiService:ApiService,private CargoService:CargoService, private router: Router, private route:ActivatedRoute) {

   
    this.route.queryParams.subscribe(params => {
        this.idcolaborador = params['idcolaborador'];

        console.log("idcolaborador",this.idcolaborador);
        

        this.apiService.getBeanColaborador(this.idcolaborador)
        .subscribe((data:any)=>{
          this.colaborador = data.result;
          console.log(this.colaborador);
          this.nome =  this.colaborador[0].nome;
          this.telefone =  this.colaborador[0].telefone;
          this.email =  this.colaborador[0].email;
          this.empresa =  this.colaborador[0].empresa;
          this.setor =  this.colaborador[0].setor;
          this.id_cargo =  this.colaborador[0].id_cargo;
          this.idcolaborador =  this.colaborador[0].codigo;;
        
         

         
         
        })
       
    });
   }


  ngOnInit(): void {
    this.formulario = this.FormBuilder.group({
      idcolaborador:'',
      nome:'',
      email:'',
      telefone:'',
      empresa:'',
      id_cargo:'',
      setor:''

    })

    this.CargoService.getAllCargo()
    .subscribe((data:any)=>{
     this.cargos = data.result;   
           
    })
   
    
  }

  onSubmit(info){
    if(this.formulario.controls['nome'].value == "" ){
      alert(" Nome  não pode ficar vazio");
    }else if(this.formulario.controls['email'].value == ""){
      alert ("Email não pode ficar vazio");
    }else if(this.formulario.controls['telefone'].value == ""){
      alert("Telefone não pode ficar vazio");

    }else if(this.formulario.controls['empresa'].value == ""){
      alert("O campo Empresa não pode ficar vazio");
    }else if(this.formulario.controls['setor'].value == ""){
      alert("O Campo setor não pode ficar vazio");

    }else if(this.formulario.controls['id_cargo'].value == ""){
      alert("O campo cargo não pode ficar vazio");
    }else{
      this.apiService.editarColaborador(info,this.idcolaborador)
      .subscribe((data:any)=>{    
       alert("Colaborador Atualizado com sucesso");
       this.router.navigate(['/colaborador']);	
      })
       
    
    }
    
   
   
  }

  salvarUpdateColaborador(){

  }
 
 
}
