import { PostoTrabalho } from './../interfaces/postoTrabalho';
import { LoginComponent } from './../login/login.component';
import { ApiService } from './../providers/posto-trabalho.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-produto-atividade',
  templateUrl: './produto-config-atividade.component.html',
  
})
export class ProdutoConfigAtividadeComponent implements OnInit {

  atividades:any = [];
  atividadeConfig:any[];
  idPosto:number;
  private produtos:any = [];
  produto:any;
  prod:any;
  contador:any;
  tipo:any;
  qtd:any;
  PtConfig:any;
  postos:any;
  nr_codigo_produto:any;
  private codfun:any;
  private usuario:any;
  ptDAO:any;
  classeVerde:any;
  classeAzul:any;
  private linha:any = [];
  private vazioPreenchido:any = [];
  existeAtividades:boolean = false;
  naoExisteAtividades:boolean = true;
  currentDate = new Date();

  constructor(private apiService:ApiService, private route:ActivatedRoute,private router: Router) {
  
   }

  ngOnInit() {  
   
    let linha =  JSON.parse(sessionStorage.getItem('linha')); 
    this.qtd =  JSON.parse(sessionStorage.getItem('qtd'));

    this.apiService.getLinhaById(linha)
    .subscribe((data:any)=>{
    this.linha = data.result;   
      
    })    
    this.getProdpTreinarColab();
    this.getProduto();
   
   }


   getProduto(){
    let produto =  JSON.parse(sessionStorage.getItem('produto')); 
    
     this.apiService.getProdById(produto).subscribe((dataProduto:any)=>{
        this.produto = dataProduto.result;         
           
        this.prod = this.produto[0].nm_desc_produto;
        this.nr_codigo_produto = this.produto[0].nr_codigo_produto;
        
     })
    
   }
 
  getProdpTreinarColab(){
   let linha =  JSON.parse(sessionStorage.getItem('linha')); 
   let produto =  JSON.parse(sessionStorage.getItem('produto')); 
   let qtd =  JSON.parse(sessionStorage.getItem('qtd'));  
   
    this.apiService.getProdConfLinhaByIdLinha(produto,linha,qtd).subscribe((dataProd:any)=>{
         this.produtos = dataProd.result;         
             
          let idProdConfig = this.produtos[0].codigo; 
           this.getAtividades(idProdConfig);

    })
  }


  getLinhaById(){
    let linha =  JSON.parse(sessionStorage.getItem('linha')); 
    this.apiService.getLinhaById(linha).subscribe((dataLinha:any)=>{         
      this.linha = dataLinha.result;      

    })
  }

  fnMatrizAtividade(idatividade){
    let row;
    let arrRetorno = Array();
    try{
      this.ptDAO = this.apiService.getCdtMatrizAtividade(idatividade).subscribe((dataAtiv:any)=>{
        let matrizAtv = dataAtiv.result;
       
          
          if(matrizAtv > 0){

            while (row = dataAtiv.result){
              arrRetorno =  Array(
                'matriz',row.codigo
              )
            }
    
          }
      })


    }catch{
       arrRetorno = Array(
        'msg'
      );

    }

}

  getAtividades(idProdConfig){
    let produto =  JSON.parse(sessionStorage.getItem('produto')); 

          this.apiService.getAtividades(idProdConfig).subscribe((dataAtiv:any)=>{
            this.atividades = dataAtiv.result;   
         

            for(let i = 0; i < this.atividades.length; i++){
              this.fnMatrizAtividade(this.atividades[i].codigo);
            }
            
            let qtdLinha = this.atividades.length;
            let loop =  qtdLinha > 4 ? 4 : qtdLinha ;
            let tcollumn = Math.floor(12/loop);
            let i = 1;
              
            if(this.atividades == "" || this.atividades == null){
            
              this.existeAtividades = true;
              this.naoExisteAtividades = false;

            }else{      
              
              this.existeAtividades = false;
              this.naoExisteAtividades = true;         

              for (let i =0; i<this.atividades.length; i++){
                this.getVazioPreenchido(i, this.atividades[i].codigo);         
            }  
              
            }

          })

  }

  getVazioPreenchido(idx, atividade){
    let linha =  JSON.parse(sessionStorage.getItem('linha')); 
    let produto =  JSON.parse(sessionStorage.getItem('produto'));      
    let qtd =  JSON.parse(sessionStorage.getItem('qtd'));  

      this.apiService.getPtConfig(produto,qtd).subscribe((dataPtConfig:any)=>{
            this.PtConfig = dataPtConfig.result;

             this.apiService.getVazioPreenchido(atividade,this.PtConfig[0].codigo,linha).subscribe((dataVazioPreenchido:any)=>{           
                
                    this.vazioPreenchido = dataVazioPreenchido.result;
              
                    this.atividades[idx].vazio = this.vazioPreenchido[0].vazio;
                    this.atividades[idx].preenchido = this.vazioPreenchido[0].preenchido;                         
                    
      
            })

      })
   
  } 

  getAtividade(e:any,atividade){

            sessionStorage.setItem('atividade', JSON.stringify(atividade)); 

            let produto =  JSON.parse(sessionStorage.getItem('produto')); 
            let qtd =  JSON.parse(sessionStorage.getItem('qtd'));  
            let atv =  JSON.parse(sessionStorage.getItem('atividade')); 
            let linha =  JSON.parse(sessionStorage.getItem('linha')); 
          
            this.apiService.getPtConfig(produto,qtd).subscribe((dataPtConfig:any)=>{
                this.PtConfig = dataPtConfig.result;      
                
                      this.apiService.getPostoByIdProdIdAtivIdLinha(atv,this.PtConfig[0].codigo,linha).subscribe((dataPosto:any)=>{     
                  
                              this.postos = dataPosto.result;                            
                              

                              if(atividade == 48 || atividade == 68){

                                this.router.navigate(['/posto-trabalho/tipo']);                             
                            

                              }else{

                                this.router.navigate(['/posto-trabalho']);
                               
                                this.sendInfo(atividade);   
                              }
                         
                      }) 
        
                }) 
        
   }

   desassociarPosto(){

    this.apiService.getUsersDigitais().subscribe((dataD:any)=>{      

      let param = JSON.stringify(dataD.result)

      this.apiService.getUrlBiometria(param).subscribe(dataU =>{
            let vetor = dataD.result;   
        
            this.usuario = vetor[dataU.indice];           
            
            if(this.usuario == undefined){
              
              alert("Usuário não encontrado");
            
            }else{
              this.router.navigate(['/finalizar-posto-automatico']);
            }
            
            
          

      })             
    });
    
   }

   sendInfo(atividade){
		var info = {
			produto:  {produto : this.prod,nr_codigo_produto:this.nr_codigo_produto},
			qtd: this.qtd,
			linha: this.linha[0].linha,
			atividade: atividade,
			tipo:0,
			mostrar:true
		}

		this.apiService.enviarInfo(info)

		
	}


}
