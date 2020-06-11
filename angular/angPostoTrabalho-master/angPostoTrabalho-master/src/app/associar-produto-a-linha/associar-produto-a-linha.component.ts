import { ApiService } from './../providers/posto-trabalho.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-associar-produto-a-linha',
  templateUrl: './associar-produto-a-linha.component.html',
 
})
export class AssociarProdutoALinhaComponent implements OnInit {

  produto:[];
  prodConfigId:number;

  constructor(private apiService:ApiService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.apiService.getProduto()
    .subscribe((data) => {
      this.produto = data.result;   
    
    })

   //this.route.params.subscribe(params => this.prodConfigId = params['2']);

    this.apiService.getProdConfigById(this.prodConfigId)
    .subscribe((data:any) => {
     // this.produto = data.result;
    
    
      

    })


  }

  mudou(){
    console.log("Mudou");
  }

}
