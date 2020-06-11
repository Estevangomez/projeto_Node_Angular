import { LoginComponent } from './../login/login.component';
import { Usuario } from './../interfaces/usuario';
import { ProdutoConfigLinhaDia } from './../interfaces/produtoConfigLinhaDia';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  private usuario:Usuario
  private qtdProd:any = [];
  getLinha = [];
  linha:FormControl = new FormControl();
  produto:FormControl = new FormControl(); 
  status:FormControl= new FormControl(); 
  qtd:FormControl= new FormControl(); 


  constructor(private apiService:ApiService, private router:Router) { }

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
    
    this.getLinha = this.linha[0].linha
      
    })

    this.getProdByIdFamilia();
  
  }  

  getProdByIdFamilia(){
    let family =  JSON.parse(sessionStorage.getItem('familia'));  
    let linhha =  JSON.parse(sessionStorage.getItem('linha')); 
    this.apiService.getProdByIdFamilia(linhha,family)
    .subscribe((data:any)=>{
      this.produtos = data.result;   
      console.log("=========", this.produtos);
         
       
    })    
  }

  confirmar(){
   let prod =  this.produtoForm.controls['produto'].value;
   let status=  this.produtoForm.controls['status'].value;
   let qtd=  this.produtoForm.controls['qtd'].value;
   let linha =  JSON.parse(sessionStorage.getItem('linha')); 
   let codfun =  JSON.parse(sessionStorage.getItem('codfun')); 
   
  
   
    this.apiService.getPtConfig(prod,qtd).subscribe((dtPtConfig:any)=>{

      let prod_config = dtPtConfig.result;     
     
      
      this.apiService.getPtConfigByCodPtByIdlinha(prod,linha).subscribe((dtptConfig:any)=>{

        let consultaSeExiste = dtptConfig.result;    
        
        
        if(consultaSeExiste == ""){

          this.ProdLinhConfDia = {
            pcld_ativo : status,
            pcld_linh_id : linha,
            pcld_prco_id : prod,
            codfun:codfun
            
           
          }     
          
          
           this.apiService.createProdConfigLinhDia(this.ProdLinhConfDia).subscribe((dataP:any)=>{      
           
            
           if(dataP){

             alert("Produto Adicionado !");

             this.router.navigate(['/produto']);	
    
           }else{

             alert("Erro ao adicionar produto !");

           }
         })    

        }else{
   
          alert('O produto já está adicionado a essa linha, tente outro produto!');

          this.router.navigate(['/produto']);	
   
        }
        
      }) 


    })

  
    
   
  }


  getQtdByIdProd(e:any,produto){
    this.apiService.getQtdByIdProd(e.target.value).subscribe((dataQtd:any)=>{
       this.qtdProd = dataQtd.result;
       console.log("=================",e.target.value);
       
       console.log(this.qtdProd);
       
     
      
    })
  }

}
