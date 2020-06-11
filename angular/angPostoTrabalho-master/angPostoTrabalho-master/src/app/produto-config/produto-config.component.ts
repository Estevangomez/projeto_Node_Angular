import { Component, OnInit } from '@angular/core';
import { ApiService } from '../providers/posto-trabalho.service';
import { Usuario } from './../interfaces/usuario';
import { Linha } from './../interfaces/linha';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-config',
  templateUrl: './produto-config.component.html', 
})
export class ProdutoConfigComponent implements OnInit {

  private linha:Linha;
  private linh:any;
  private usuario:Usuario;
  private engn:boolean;

  constructor(private apiService:ApiService,private router: Router) { }

  ngOnInit() {
    let linhha =  JSON.parse(sessionStorage.getItem('linha'));  
  
    this.apiService.getLinhaById(linhha)
    .subscribe((data:any)=>{
    this.linha = data.result; 
    
    this.linh = this.linha[0].linha;  
      
    })
     
   }
    
   treinamentoLider(){

    this.apiService.checarEngn().subscribe((dataD:any)=>{      

      let param = JSON.stringify(dataD.result)

    
      

      this.apiService.getUrlBiometria(param).subscribe(dataU =>{

        let vetor = dataD.result;   

        this.usuario = vetor[dataU.indice];      
        
        if(this.usuario){
          this.engn = true;
          this.usuario.engn = this.engn;         

          this.router.navigate(['/escolher-produto/treinar-lider']);   
        }else{
          alert("Você não tem permissão para realizar este procedimento");
        }
     

      })             
    });

   }

   escolherProdutoFinalizarColaborador(){   
    this.router.navigate(['/escolher-produto/finalizar-posto']);
  }
   

  }


