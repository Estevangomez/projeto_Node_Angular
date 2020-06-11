import { Component, OnInit } from '@angular/core';
import { ApiService } from '../providers/posto-trabalho.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finalizar-posto-aut-linha',
  templateUrl: './finalizar-posto-aut-linha.component.html',

})
export class FinalizarPostoAutLinhaComponent implements OnInit {

  linha:any[];
  getlinha:any;
  private finalizacoesPosto:any = [];
  private cod_produto_config_linha = [];
  codlinha:any;
  qtd:any;
  colaboradoresPosto:any;
  produto:any;
  totalColaboradores:any;
  colabsPosto:any;
  postosFinalizar = [];
  existeprodutos:boolean = false;
  naoExisteProdutos:boolean = true;


  constructor(private apiService:ApiService,private router: Router) { }

  ngOnInit() {

    this.linha =  JSON.parse(sessionStorage.getItem('linha'));  
    this.qtd =  JSON.parse(sessionStorage.getItem('qtd'));   
    this.produto =  JSON.parse(sessionStorage.getItem('produto'));   

    this.apiService.getLinhaById(this.linha)
    .subscribe((data:any)=>{
     let  idlinha = data.result;   
    this.getlinha = idlinha[0].linha;
    this.codlinha = idlinha[0].codigo  
      
    })

    this.getColaboradoresPosto();

  }

  
ColaboradoresPostoFinalizar(){

  if(confirm("Tem certeza que deseja finalizar todos os posto ?  ")) {

    this.apiService.getColaboradoresLinha(this.linha).subscribe((dtcolabs:any)=>{

      this.colabsPosto = dtcolabs.result;  
      
      
      let qtdDesassociacao = this.colabsPosto.length;

      for(let i = 0; i < this.colabsPosto.length; i++){
       

        this.apiService.findIdProdutoConfigByPosto(this.colabsPosto[i].POSTO).subscribe((dtPostos:any)=>{
          let cod_produto_config_linha = dtPostos.result;           
         
            this.apiService.getQtyStaffsPosto(cod_produto_config_linha[0].cod_produto_config_linha).subscribe((dtQtdStaffposto:any)=>{
              let qtdStaffPosto = dtQtdStaffposto.result; 
              let  TotalqtdStaffPosto = qtdStaffPosto.length;              
                
                this.apiService.updateFinalizarPostoByCodposto(this.colabsPosto[i].POSTO).subscribe((dtfinPostos)=>{
  
                  if((TotalqtdStaffPosto - qtdDesassociacao)==0){
  
                    this.apiService.getCodTuplaProdConfLinhaDia(cod_produto_config_linha[0].cod_produto_config_linha).subscribe((dtcodtupla:any)=>{
                    
                          let  cod_produto_conf_linha_dia = dtcodtupla.result;

                          console.log("cod_produto_conf_linha_dia ====== ",cod_produto_conf_linha_dia);
                          
  
                            if(cod_produto_conf_linha_dia){
                              this.apiService.updateProdConfLinhaDia(cod_produto_conf_linha_dia[0].codigo).subscribe((dtprodConfLinhaDia)=>{
                                console.log("Resultado === ",dtprodConfLinhaDia);
                                
                              })
  
                            }else{
  
                            }
                      
                    })
  
                  }else{
  
                  }
  
                })
            })
        
          
        })  

        
      }

  
    })

    }
  

}

getColaboradoresPosto(){

  this.apiService.getColaboradoresLinha(this.linha).subscribe((dtcolabs:any)=>{
    this.colaboradoresPosto = dtcolabs.result;
    this.totalColaboradores = this.colaboradoresPosto.length;
  })

}

}
