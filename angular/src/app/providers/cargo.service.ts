import { Cargo } from './../interfaces/cargo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilsService } from '../utils/utils.service';

@Injectable()
export class CargoService {

    private url: any;
    cargo: Cargo;

    constructor(private http: HttpClient, private endPoint: UtilsService) { }

    /****************************  Colaborador  ****************************************/

    createNovoCargo(colaborador: any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.post(this.url + "cargo",colaborador);

    }

    getAllCargo() {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "cargo");

    }

    getBeanCargo(idcargo) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "cargo/",idcargo);

    }

   

}