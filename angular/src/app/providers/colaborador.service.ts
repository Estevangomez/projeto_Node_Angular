import { Colaborador } from './../interfaces/colaborador';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilsService } from '../utils/utils.service';

@Injectable()
export class ApiService {

    private url: any;
    colaborador: Colaborador;

    constructor(private http: HttpClient, private endPoint: UtilsService) { }

    /****************************  Colaborador  ****************************************/

    createNovoColaborador(colaborador: any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.post(this.url + "colaborador",colaborador);

    }

    removerColaborador(idcolaborador: any) {
        console.log(idcolaborador);
        
        this.url = this.endPoint.getEndPoint();
        return this.http.delete(this.url + "colaborador/"+idcolaborador);
    }

    getAllColaborador() {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "colaborador/");

    }  

}