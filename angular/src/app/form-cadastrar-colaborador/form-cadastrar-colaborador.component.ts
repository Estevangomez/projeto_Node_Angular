import { CargoService } from './../providers/cargo.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../providers/colaborador.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-cadastrar-colaborador',
  templateUrl: './form-cadastrar-colaborador.component.html',
  styleUrls: ['./form-cadastrar-colaborador.component.css']
})
export class FormCadastrarColaboradorComponent implements OnInit {

  formulario: any = FormGroup;
  cargos:any;
  constructor(private FormBuilder: FormBuilder,private router: Router, private CargoService:CargoService,private http: HttpClient, private apiService: ApiService) { }

  ngOnInit(): void {
    this.formulario = this.FormBuilder.group({
      idcolaborador: '',
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      id_cargo: '',
      setor: ''

    })

    this.CargoService.getAllCargo()
    .subscribe((data:any)=>{
     this.cargos = data.result;   
        console.log( this.cargos);
           
    })


  }

  onSubmit(data) {

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
      this.apiService.createNovoColaborador(data)
      .subscribe((data: any) => {

        alert("Colaborador Inserido Com Sucesso");
        this.router.navigate(['/colaborador']);	
      })
    }
  }




}
