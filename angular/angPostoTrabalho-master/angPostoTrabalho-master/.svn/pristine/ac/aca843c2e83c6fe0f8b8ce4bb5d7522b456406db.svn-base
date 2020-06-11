import { Component, OnInit } from '@angular/core';
import { ApiService } from '../providers/posto-trabalho.service';
import { Linha } from './../interfaces/linha';

@Component({
  selector: 'app-produto-config',
  templateUrl: './produto-config.component.html', 
})
export class ProdutoConfigComponent implements OnInit {

  private linha:Linha;
  private linh:any;

  constructor(private ApiService:ApiService) { }

  ngOnInit() {
    let linhha =  JSON.parse(sessionStorage.getItem('linha'));  
  
    this.ApiService.getLinhaById(linhha)
    .subscribe((data:any)=>{
    this.linha = data.result; 
    console.log("Linha == ",this.linha);
    
    this.linh = this.linha[0].linha;  
      
    })
     
   }
    
    
  }


