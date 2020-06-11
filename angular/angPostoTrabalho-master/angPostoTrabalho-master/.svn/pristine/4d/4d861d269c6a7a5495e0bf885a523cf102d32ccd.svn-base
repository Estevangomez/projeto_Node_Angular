import { ProdutoConfigLinhaDia } from './../interfaces/produtoConfigLinhaDia';
import { Component, OnInit } from '@angular/core';
import { Linha } from '../interfaces/linha';
import { ApiService } from '../providers/posto-trabalho.service';
import {FormControl, FormGroup, Validators,FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-produto-config-linha',
  templateUrl: './produto-config-linha.component.html',
 
})
export class ProdutoConfigLinhaComponent implements OnInit {

  private produtoForm: FormGroup;
  private produtos = [];
  private produtoConf:any;
  private ProdLinhConfDia;
  private qtdProd:any = [];
  linha:FormControl = new FormControl();
  produto:FormControl = new FormControl(); 
  status:FormControl= new FormControl(); 
  qtd:FormControl= new FormControl(); 


  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this. produtoForm = new FormGroup({   
      produto: new FormControl('', {validators: [Validators.required]}),
      status: new FormControl('', {validators: [Validators.required]}),
      qtd: new FormControl('', {validators: [Validators.required]}),
      linha: new FormControl('', {validators: [Validators.required]})
      
    })
   
    let linhha =  JSON.parse(sessionStorage.getItem('linha'));     
  
    this.apiService.getLinhaById(linhha)
    .subscribe((data:any)=>{
    this.linha = data.result;   
      
    })

    this.getProdByIdFamilia();
  
  }  

  getProdByIdFamilia(){
    let family =  JSON.parse(sessionStorage.getItem('familia'));  
    let linhha =  JSON.parse(sessionStorage.getItem('linha')); 
    this.apiService.getProdByIdFamilia(linhha,family)
    .subscribe((data:any)=>{
      this.produtos = data.result;     
      console.log(this.produtos);
       
    })    
  }

  confirmar(){
   let prod =  this.produtoForm.controls['produto'].value;
   let status=  this.produtoForm.controls['status'].value;
   let qtd=  this.produtoForm.controls['qtd'].value;
   let linha =  JSON.parse(sessionStorage.getItem('linha')); 
   let codfun =  JSON.parse(sessionStorage.getItem('codfun'));    

    this.apiService.getProdByParams(prod,linha,status)
    .subscribe((data:any)=>{
      this.produtos = data.result;    
      if(this.produtos){ 

            console.log("Prod ==",prod,"status===",status,"linhha ===",linha, "qtd===",qtd);

            this.ProdLinhConfDia = {
              pcld_ativo : status,
              pcld_linh_id : linha,
              pcld_prco_id : prod,
              
             
            } 
             this.apiService.createProdConfigLinhDia(this.ProdLinhConfDia).subscribe((dataP:any)=>{  
              console.log(dataP); 
           })
      
      }
      
      
    })  
   
  }


  getQtdByIdProd(e:any){
    this.apiService.getQtdByIdProd(e.target.value).subscribe((dataQtd:any)=>{
       this.qtdProd = dataQtd.result;
       console.log(e.target.value);
       
       console.log(this.qtdProd);
       
     
      
    })
  }

}
