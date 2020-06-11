import { ApiService } from '../providers/posto-trabalho.service';
import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { filter } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../interfaces/usuario';


//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posto-trabalho',
  templateUrl: './posto-trabalho.component.html',
 
})
export class PostoTrabalhoComponent implements OnInit {
  srcImgPosto:string = './assets/imagens/__boy.png';


  @ViewChild('linhaId',{static: false}) linhaId: HTMLElement;


  linha:any[];
  private posto :any[];
  private associarColab;
  private postoVazio;
  private produtos:any = [];
  produto:any;
  prod:any;
  getLinha:any;

  private atividade:any = [];
  private postos:any = [];
  private vazioPreenchido:any = [];
  private usuario:Usuario =  new Usuario();
  idPosto:number;
  private codfun;
  private foto:any = [];
  private caminhoFoto:string = "assets/fotos/13777.jpg";
  codPT:any;
  currentDate = new Date();
  qtd:any;
  tipo:any;
  ptConfig:any;

  constructor(private apiService:ApiService, private route:ActivatedRoute) {
    
    
  }
  ngOnInit() {
    let linha =  JSON.parse(sessionStorage.getItem('linha'));  
    this.qtd =  JSON.parse(sessionStorage.getItem('qtd'));   

    this.apiService.getLinhaById(linha)
    .subscribe((data:any)=>{
    this.linha = data.result;   
    
      
    })

    this.route.queryParams.subscribe((queryParams:any)=>{
      this.tipo = queryParams['tipo']    
      
    });

   
    this.getProdpTreinarColab();
    this.getLinhaById();
    this.getProduto();  
    this.getAtividade();
    this.getIdProdConfig();
  
    
  }

  
  associarAoPosto(idposto){

    this.apiService.getPostoByIdPosto(idposto).subscribe((dataPosto:any)=>{

      this.postoVazio = dataPosto.result;

          if(this.postoVazio[0].codfun != null){            

            if(confirm("Já existe Um(a) Colaborador(a) associado(a) a este posto, deseja substituí-lo(a)? ")) {
            
              this.substituir(idposto);

            }
         

          }else{

            this.apiService.getUsersDigitais().subscribe((dataD:any)=>{      

              let param = JSON.stringify(dataD.result)
        
              this.apiService.getUrlBiometria(param).subscribe(dataU =>{
                    let vetor = dataD.result;   
                
                    this.usuario = vetor[dataU.indice];     
                    this.codfun =  this.usuario.codfun         
                
                    this.associarColab = {
                      codFun : this.codfun, 
                      dt_inicio_trabalho: this.currentDate
                    } 
                    
                    this.apiService.putAssociarColabPosto(idposto,this.associarColab).subscribe((associarColab)=>{

                      alert("Colaborador associado com sucesso");

                      this.postos.foto = `http://147.1.0.84/sisconp2/fotos/${this.postos.codFun}.jpg`

                     
                      
          
                  })
        
              })             
            });

            


          }
  }) 

  }


  getProdpTreinarColab(){
    let linha =  JSON.parse(sessionStorage.getItem('linha')); 
    let produto =  JSON.parse(sessionStorage.getItem('produto')); 
    let qtd =  JSON.parse(sessionStorage.getItem('qtd'));      
 
     this.apiService.getProdConfLinhaByIdLinha(produto,linha,qtd).subscribe((dataProd:any)=>{
       this.produtos = dataProd.result;   
      
       
     
           
     })
   }

   getLinhaById(){
    let linha =  JSON.parse(sessionStorage.getItem('linha'));  
     
    this.apiService.getLinhaById(linha).subscribe((dataLinha:any)=>{       
      this.linha = dataLinha.result;
      this.getLinha = this.linha[0].linha;     
      
  
    })
  }

  getAtividade(){

    let atv =  JSON.parse(sessionStorage.getItem('atividade')); 

   this.apiService.getAtividadeById(atv).subscribe((dataAtividade:any)=>{
      this.atividade = dataAtividade.result;   
      console.log("========",this.atividade);
         
      
   })
  }
getIdProdConfig(){
  let produto =  JSON.parse(sessionStorage.getItem('produto')); 
  let qtd =  JSON.parse(sessionStorage.getItem('qtd'));  
  let atv =  JSON.parse(sessionStorage.getItem('atividade')); 
  let linha =  JSON.parse(sessionStorage.getItem('linha')); 

  this.apiService.getPtConfig(produto,qtd).subscribe((dataPtConfig:any)=>{
    this.ptConfig = dataPtConfig.result;    
           
                
              if(this.tipo != undefined || this.posto != null){

                this.apiService.getTipoPostoByTipo(atv,this.ptConfig[0].codigo,linha,this.tipo).subscribe((dataPostosTipos:any)=>{
                     
                  this.postos = dataPostosTipos.result;
                 
                    
                  for(let i = 0; i<this.postos.length;i++){           
               
                    if(this.postos[i].codFun == null){                                    
                      
                        this.postos[i].foto = `assets/imagens/__boy.png`
                        
                    }else{
        
                      this.postos[i].foto = `http://147.1.0.84/sisconp2/fotos/${this.postos[i].codFun}.jpg`                    
        
                    }                
           
            }

            })                

              }else{

                this.apiService.getPostoByIdProdIdAtivIdLinha(atv,this.ptConfig[0].codigo,linha).subscribe((dataPosto:any)=>{     

                  this.postos = dataPosto.result;                     
               
                   for(let i = 0; i<this.postos.length;i++){           
                   
                            if(this.postos[i].codFun == null){                                    
                              
                                this.postos[i].foto = `assets/imagens/__boy.png`
                                
                            }else{
                
                              this.postos[i].foto = `http://147.1.0.84/sisconp2/fotos/${this.postos[i].codFun}.jpg`                    
                
                            }                
                   
                    }            
                 })



               
              }
   
    
  })

  }

  getProduto(){
    let produto =  JSON.parse(sessionStorage.getItem('produto')); 
   
     this.apiService.getProdById(produto).subscribe((dataProduto:any)=>{
        this.produto = dataProduto.result; 
        this.prod  = this.produto[0].nm_desc_produto;
    
     })
    
   }
 
    substituir(idposto){     
      
      this.apiService.getUsersDigitais().subscribe((dataD:any)=>{      

        let param = JSON.stringify(dataD.result)
  
        this.apiService.getUrlBiometria(param).subscribe(dataU =>{
              let vetor = dataD.result;   
          
              this.usuario = vetor[dataU.indice];     
              this.codfun =  this.usuario.codfun         
          
              this.associarColab = {
                codFun : this.codfun, 
                dt_inicio_trabalho: this.currentDate
              } 
              
              this.apiService.putAssociarColabPosto(idposto,this.associarColab).subscribe((associarColab)=>{
               alert("Colaborador associado com sucesso")              
            })
  
        })             
      });
  
  
    }



}
