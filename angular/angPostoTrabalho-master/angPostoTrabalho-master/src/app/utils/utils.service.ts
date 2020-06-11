import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
//import {url}  from './../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private endPoint= `http://localhost:3000/api/v1/`;  
  private urlBiometria = `http://localhost:9000/api/public/v1/captura/1`;

  getEndPoint() { 
  return this.endPoint; 

}

getUrlBiometria() { 
  return this.urlBiometria; 

}

  constructor(private http:HttpClient) { }
}
