import { ApiService } from './../providers/posto-trabalho.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-posto-trabalho',
  templateUrl: './tipo-posto-trabalho.component.html', 
})
export class TipoPostoTrabalhoComponent implements OnInit {

  tipoPosto:[];
  tipos:any;
  qtd:any;
  linha:any;
  produto:any;
  prod:any;
  nr_codigo_produto:any;
  constructor(private apiService:ApiService, private route:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    
    let linha =  JSON.parse(sessionStorage.getItem('linha')); 
    this.qtd =  JSON.parse(sessionStorage.getItem('qtd'));

    this.apiService.getLinhaById(linha)
    .subscribe((data:any)=>{
    this.linha = data.result;   
    })
    
    this.getTipoPostoTrabalho();
    this.getProduto();

  }

  getTipoPostoTrabalho(){
    let produto =  JSON.parse(sessionStorage.getItem('produto')); 
    let qtd =  JSON.parse(sessionStorage.getItem('qtd'));  
    let atv =  JSON.parse(sessionStorage.getItem('atividade')); 
    let linha =  JSON.parse(sessionStorage.getItem('linha')); 

    this.apiService.getTipoPostoTrabalho(produto,qtd,linha,atv).subscribe((dataTipoPosto:any)=>{
      this.tipos = dataTipoPosto.result;        
      
   })
  }

  getTipoPosto(tipo){   
    this.sendInfo(tipo);   
    
    this.router.navigate(['/posto-trabalho'],{queryParams:{tipo:tipo}});
   
    
  }
 
  
  getProduto(){
    let produto =  JSON.parse(sessionStorage.getItem('produto')); 
    
     this.apiService.getProdById(produto).subscribe((dataProduto:any)=>{
        this.produto = dataProduto.result;         
           
        this.prod = this.produto[0].nm_desc_produto;
        this.nr_codigo_produto = this.produto[0].nr_codigo_produto;
        
     })
    
   }

   sendInfo(tipo){
    let atv =  JSON.parse(sessionStorage.getItem('atividade')); 
		var info = {
			produto:  {produto : this.prod,nr_codigo_produto:this.nr_codigo_produto},
			qtd: this.qtd,
			linha: this.linha[0].linha,
      atividade: atv,
      tipo:tipo,
			mostrar:true
		}

		this.apiService.enviarInfo(info)

		
  }


}
