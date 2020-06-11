import { LoginService } from './providers/login.service';
import * as jquery from 'jquery';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'posto-trabalho';

  mostrarMenu:boolean = false;  

  constructor(private loginService:LoginService){
  
  }

  ngOnInit(){    

  
    
  }


}
