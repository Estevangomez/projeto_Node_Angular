import { LoginService } from './../providers/login.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../providers/posto-trabalho.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	
})
export class NavbarComponent implements OnInit {
	
	srcImagem: string = '/assets/imagens/logo-posto-trabalho-menor.png';
	produto:any;
	prod:any;
	nr_codigo_produto:any;
	qtd:any;
	atividade:any;
	ativ:any;
	tipo:any;
	postoTipo:any;
	nomeTipo:any;
	existeTipo:boolean = false;
	atv:any;
	linha:any;
	getLinha:any;
	isCollapsed:boolean = false;
	mostrarInfo:boolean = false;
	mostrarVoltar:boolean = true;

	constructor(private router: Router, private route: ActivatedRoute, public nav: LoginService,private apiService: ApiService) { }

	
	ngOnInit() {
		this.getInfo();
		this.getMostarVoltar()
		
	}
	
	voltar() {
	    this.mostrarInfo = false;	
		window.history.back();
		
	}
	
	logout() {
		if (confirm("Deseja realizar Logout do sistema ?")) {
			
			sessionStorage.clear();		
			this.router.navigate(['/login']);
			
		}
		
		
	}
	
	existeUsuario() {
		return this.nav.verificarSessao()
	}

	getInfo(){	
		this.apiService.mostrarInfoEmitter.subscribe((informacoes)=>{
			this.mostrarInfo = informacoes.mostrar;

			this.produto = informacoes.produto.produto;
			this.qtd = informacoes.qtd;			
			this.linha = informacoes.linha;
			this.nr_codigo_produto =  informacoes.produto.nr_codigo_produto;
			//this.tipo = informacoes.tipo;	
			
			console.log("Informações ===== " , informacoes.tipo);

			if(informacoes.tipo == 0 ){
				this.nomeTipo = "";
				
			
			}else{
				this.tipo = informacoes.tipo;
				this.apiService.getTipoPostoById(this.tipo).subscribe((dtTpo:any)=>{
					this.postoTipo = dtTpo.result;
					console.log("=========== " , 	this.postoTipo);
					
					this.nomeTipo = this.postoTipo[0].nome;
					this.existeTipo = true;
					
					
				})
			}
			
			
			this.apiService.getAtividadeById(informacoes.atividade).subscribe((dataAtividade: any) => {
				this.ativ = dataAtividade.result;
				this.atividade = this.ativ[0].atividade;				
					
	
			})

			

		

			
			

		})
		return this.nav.passarInfo();
	
	}

/***********************************************************************************************************************/	

	mostrarInfor(){
		return this.mostrarInfo;
	}	
	
	existTipo(){
		return this.existeTipo;
	}

	eraseElement(){
		this.mostrarInfo = false;	
	/*	sessionStorage.removeItem('produto');
		sessionStorage.removeItem('atividade');
		sessionStorage.removeItem('qtd');*/
	
		
	}

	getMostarVoltar(){
		this.apiService.mostrarVoltar.subscribe((voltar)=>{
			this.mostrarVoltar = voltar;
			console.log("==================" , this.mostrarVoltar);
						
			
		})
	}
	
	
}



