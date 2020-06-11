import { UtilsService } from './../../utils/utils.service';
import { ApiService } from './../../providers/posto-trabalho.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-treinar-colaborador',
  templateUrl: './treinar-colaborador.component.html',

})
export class TreinarColaboradorComponent implements OnInit {

  srcImagem:string = '/assets/imagens/logo-posto-trabalho-menor.png';

   
  url:[];
 
  private getlinha:any;
  private produtos:any = [];
  private getLinha:any;
  produto:any;
  existeprodutos:boolean = false;
  naoExisteProdutos:boolean = true;


  constructor(private ApiService:ApiService, private endPoint:UtilsService,private router: Router, private route:ActivatedRoute) { }

 ngOnInit() {
  
   
   let linha =  JSON.parse(sessionStorage.getItem('linha'));    
   this.ApiService.getLinhaById(linha)
   .subscribe((data:any)=>{
    this.getlinha = data.result;   
   this.getLinha = this.getlinha[0].linha;
    
     
   })
   
   this.getProdByIdLinha();
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
    
    this.router.navigate(['/configurar-produto']);		
    
  }

  getProd(e:any,produto:any,qtd:any){   
    
    sessionStorage.setItem('produto', JSON.stringify(produto)); 
    sessionStorage.setItem('qtd', JSON.stringify(qtd));  
      
    this.router.navigate(['/escolher-atividade']);	
  }

}
