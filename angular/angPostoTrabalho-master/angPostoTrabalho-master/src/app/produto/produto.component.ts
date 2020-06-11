import { LoginService } from './../providers/login.service';
import { Usuario } from './../interfaces/usuario';
import { Linha } from './../interfaces/linha';
import {FormControl, FormGroup, Validators,FormBuilder } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../providers/posto-trabalho.service';
import { UtilsService } from '../utils/utils.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  
})
export class ProdutoComponent implements OnInit {

  srcImagem:string = '/assets/imagens/logo-posto-trabalho-menor.png';

   
  url:[];
 
  private getlinha:any;
  private usuario:Usuario;
  linh:any;
  codlinha:any;
  private produtos:any = [];
  produto:any;
  mostrarVoltar:boolean = false;
  existeprodutos:boolean = false;
  naoExisteProdutos:boolean = true;


  constructor(private ApiService:ApiService, private endPoint:UtilsService,private router: Router, private route:ActivatedRoute, private login:LoginService) { }

  ngOnInit() {

   
   let linha =  JSON.parse(sessionStorage.getItem('linha'));    
    
   this.ApiService.getLinhaById(linha)
   .subscribe((data:any)=>{
    this.getlinha = data.result;   
    
    this.linh = this.getlinha[0].linha;
    this.codlinha = this.getlinha[0].codigo
    
     
   })
   
   this.getProdByIdLinha();
   this.mostraVoltar();
  }
  
  getProdByIdLinha(){
  let linha =  JSON.parse(sessionStorage.getItem('linha')); 

   this.ApiService.getProdByIdLinha(linha).subscribe((dataProd:any)=>{

     this.produtos = dataProd.result;     
     
      
      if(this.produtos == "" || this.produtos == null){
        this.existeprodutos = true;
        this.naoExisteProdutos = false;
        
      }else{
        this.existeprodutos = false;
        this.naoExisteProdutos = true;
        
      }   
  
   
        
   })
 }

  ProdutoConfig(){
    
    this.ApiService.getUsersDigitais().subscribe((dataD:any)=>{      

      let param = JSON.stringify(dataD.result)

      this.ApiService.getUrlBiometria(param).subscribe(dataU =>{
            let vetor = dataD.result;   
        
            this.usuario = vetor[dataU.indice]; 
            
            this.mostrarVoltar = true;  
            this.ApiService.enviarMostrarVoltar(this.mostrarVoltar);
             
            if(!this.usuario){
              alert("Usuário não encontrado")
            }
            else{
              this.router.navigate(['/configurar-produto']);	
            }
        
         
            
        

      })             
    });
 	
    
  }

  desassociarLinha(){
    this.ApiService.getUsersDigitais().subscribe((dataD:any)=>{      

      let param = JSON.stringify(dataD.result)

      this.ApiService.getUrlBiometria(param).subscribe(dataU =>{
            let vetor = dataD.result;   
        
            this.usuario = vetor[dataU.indice];     
             
            if(!this.usuario){
              alert("Usuário não encontrado")
            }
            else{
              this.router.navigate(['/finalizar-posto-aut-linha']);	
            }
        
         
            
        

      })             
    });

  }

  getProd(produto:any,qtd:any){  
    this.mostrarVoltar = true;  
    this.ApiService.enviarMostrarVoltar(this.mostrarVoltar);

    
    sessionStorage.setItem('produto', JSON.stringify(produto)); 
    sessionStorage.setItem('qtd', JSON.stringify(qtd));        
      
    this.router.navigate(['/atividade']);	
  }


mostraVoltar(){
  this.mostrarVoltar = false;
  this.ApiService.enviarMostrarVoltar(this.mostrarVoltar)


}

  

}
