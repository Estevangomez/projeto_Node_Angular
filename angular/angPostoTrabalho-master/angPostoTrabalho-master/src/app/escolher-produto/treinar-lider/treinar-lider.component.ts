import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { Linha } from '../../interfaces/linha';
import {FormControl, FormGroup, Validators,FormBuilder } from "@angular/forms";
import { ApiService } from '../../providers/posto-trabalho.service';
import { UtilsService } from '../../utils/utils.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-treinar-lider',
  templateUrl: './treinar-lider.component.html',
 
})
export class TreinarLiderComponent implements OnInit {

  url:[];
 
  private getlinha:any;
  private usuario:Usuario;
  linh:any;
  linha:any;
  codlinha:any;
  private produtos:any = [];
  produto:any;
  existeprodutos:boolean = false;
  naoExisteProdutos:boolean = true;

  constructor(private ApiService:ApiService, private endPoint:UtilsService,private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
  
   
   this.linha =  JSON.parse(sessionStorage.getItem('linha'));    
    
   this.ApiService.getLinhaById(this.linha)
   .subscribe((data:any)=>{
    this.getlinha = data.result;   
    
    this.linh = this.getlinha[0].linha;
    this.codlinha = this.getlinha[0].codigo
    
     
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

 getProd(produto:any,qtd:any){  

  
  sessionStorage.setItem('produto', JSON.stringify(produto)); 
  sessionStorage.setItem('qtd', JSON.stringify(qtd));

    
 this.router.navigate(['/escolher-atividade/treinar-lider']);	
}


}
