import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private endPoint= `http://localhost:3000/api/v1/`;  

  getEndPoint() { 
  return this.endPoint; 

}
  constructor(private http:HttpClient) { }
}
