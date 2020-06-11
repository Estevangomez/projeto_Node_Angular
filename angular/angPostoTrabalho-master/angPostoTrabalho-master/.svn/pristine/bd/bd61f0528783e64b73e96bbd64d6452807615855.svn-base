import { LoginComponent } from './../login/login.component';
import { ApiService } from './posto-trabalho.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import {map, catchError} from 'rxjs/operators';
import{Observable} from 'rxjs'
import { Router } from '@angular/router';
import { Usuario } from './../interfaces/usuario';
import { Linha } from './../interfaces/linha';
import { error } from 'util';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuario: Usuario;
  private familia:any;
  private linha:Linha;
  private webservice = `http://localhost:3000/api/v1/`;
  private urlBiometriaCad:any ='http://localhost:9000/api/public/v1/captura/Identify';
  private usuarioAutenticado:boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();
 // notifier = new EventEmitter()
  //notifierMenu = new EventEmitter();


  constructor(  private http: HttpClient, private router: Router, private apiService:ApiService) { }

logar(usuario:any, linha, familia){
	
	this.usuario = usuario;
	this.linha = linha;
	this.familia = familia;
			
				
			if(usuario.nome!=undefined){		
				
				sessionStorage.setItem('empresa', JSON.stringify(this.usuario.empresa));	
				sessionStorage.setItem('digital', JSON.stringify(this.usuario.digital));
				sessionStorage.setItem('codfun', JSON.stringify(this.usuario.codfun));
				sessionStorage.setItem('id', JSON.stringify(this.usuario.id));
				sessionStorage.setItem('nome', JSON.stringify(this.usuario.nome));
				sessionStorage.setItem('setor', JSON.stringify(this.usuario.setor));	
				sessionStorage.setItem('status', JSON.stringify(this.usuario.status));
				sessionStorage.setItem('drt', JSON.stringify (this.usuario.drt));	
				sessionStorage.setItem('linha', JSON.stringify(this.linha));
				sessionStorage.setItem('familia', JSON.stringify(this.familia));				
				
				this.usuarioAutenticado = true;

				this.mostrarMenuEmitter.emit(true);

				this.router.navigate(['/produto']);				
				

			}else{
				this.usuarioAutenticado = false;

				this.mostrarMenuEmitter.emit(false);

				alert("Usuario não Identificado");

				return error;
			}
		



}


	verificarSessao(){
		return window.sessionStorage.getItem('digital') != null
	}

}
