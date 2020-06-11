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
  constructor(private apiService:ApiService, private route:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    
    this.getTipoPostoTrabalho();

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
    
    this.router.navigate(['/posto-trabalho'],{queryParams:{tipo:tipo}});
    
  }


}
