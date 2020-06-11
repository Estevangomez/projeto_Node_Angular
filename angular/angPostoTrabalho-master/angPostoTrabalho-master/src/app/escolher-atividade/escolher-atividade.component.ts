import { ApiService } from './../providers/posto-trabalho.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-escolher-atividade',
  templateUrl: './escolher-atividade.component.html',

})
export class EscolherAtividadeComponent implements OnInit {

  atividades:any = [];
  atividadeConfig:any[];
  idPosto:number;
  qtd:any;
  tipo:any;
  private postos:any;
  private PtConfig:any;
  private produto:any;
  private prod:any;
  private produtos:any = [];
  private nr_codigo_produto:any;
  private linha:any = [];
  private vazioPreenchido:any = [];
  currentDate = new Date();


  constructor(private apiService:ApiService, private route:ActivatedRoute,private router: Router) { }
  ngOnInit() {  
   
    let linha =  JSON.parse(sessionStorage.getItem('linha'));  

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
   this.qtd =  JSON.parse(sessionStorage.getItem('qtd'));  

  
   
    this.apiService.getProdConfLinhaByIdLinha(produto,linha,this.qtd).subscribe((dataProd:any)=>{
      this.produtos = dataProd.result; 

      this.getAtividades(this.produtos[0].codigo);
          
             
    })
  }


  getLinhaById(){
    let linha =  JSON.parse(sessionStorage.getItem('linha')); 
    this.apiService.getLinhaById(linha).subscribe((dataLinha:any)=>{       
      this.linha = dataLinha.result;      

    })
  }

  getAtividades(idprodconfig){
    let produto =  JSON.parse(sessionStorage.getItem('produto'));   

    this.apiService.getAtividades(idprodconfig).subscribe((dataAtiv:any)=>{
      this.atividades = dataAtiv.result;       
     
      for (let i =0; i<this.atividades.length; i++){
         this.getVazioPreenchido(i, this.atividades[i].cod_atividade);            
        
      }
      
    })
  }

  getVazioPreenchido(idx, atividade){
    let linha =  JSON.parse(sessionStorage.getItem('linha')); 
    let produto =  JSON.parse(sessionStorage.getItem('produto'));  
    

    this.apiService.getVazioPreenchido(atividade,produto,linha).subscribe((dataVazioPreenchido:any)=>{

      this.vazioPreenchido = dataVazioPreenchido.result;

      this.atividades[idx].vazio = this.vazioPreenchido[0].vazio;
      this.atividades[idx].preenchido = this.vazioPreenchido[0].preenchido;   
      
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
                             
                              
                                  this.router.navigate(['/escolher-tipo']);

                                this.apiService.getTipoPostoTrabalho(produto,qtd,linha,atividade).subscribe((dataTipoPosto:any)=>{
                                    this.tipo = dataTipoPosto.result;            
                                    
                                })

                              }else{
                                this.sendInfo(atividade);
                                this.router.navigate(['posto-trabalho/treinamentoColaborador']);		

                              }

                           
                  
                      }) 
        
                }) 

   
  
  
   
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
