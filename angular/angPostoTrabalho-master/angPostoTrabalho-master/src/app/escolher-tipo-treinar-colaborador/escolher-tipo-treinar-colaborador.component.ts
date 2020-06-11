import { Component, OnInit } from '@angular/core';
import { ApiService } from './../providers/posto-trabalho.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-escolher-tipo-treinar-colaborador',
  templateUrl: './escolher-tipo-treinar-colaborador.component.html',
  
})
export class EscolherTipoTreinarColaboradorComponent implements OnInit {

  constructor(private apiService:ApiService, private route:ActivatedRoute,private router: Router) { }

  private tipos:any;
  produto:any;
  prod:any;
  nr_codigo_produto:any;
  linha:any;
  qtd:any;

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

  getProduto(){
    let produto =  JSON.parse(sessionStorage.getItem('produto')); 
    
     this.apiService.getProdById(produto).subscribe((dataProduto:any)=>{
        this.produto = dataProduto.result;         
           
        this.prod = this.produto[0].nm_desc_produto;
        this.nr_codigo_produto = this.produto[0].nr_codigo_produto;
        
     })
    
   }

  getTipo(tipo){
    this.sendInfo(tipo);   
    this.router.navigate(['/posto-trabalho/treinamentoColaborador'],{queryParams:{tipo:tipo}});
    

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
