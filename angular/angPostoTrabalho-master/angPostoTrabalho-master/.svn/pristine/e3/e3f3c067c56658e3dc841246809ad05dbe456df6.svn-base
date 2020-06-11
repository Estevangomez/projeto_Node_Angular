import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  
})
export class NavbarComponent implements OnInit {

  srcImagem:string = '/assets/imagens/logo-posto-trabalho-menor.png';

  constructor(private router: Router, private route:ActivatedRoute) { }
  
  isCollapsed = false;

  ngOnInit() {
  let linha  =  JSON.parse(sessionStorage.getItem('linha'));
  console.log("Linha NavBar",linha);
  
  }

  voltar(){
       
    window.history.back();
   
  }

  logout(){
    if(confirm("Deseja realizar Logout do sistema ?")) {
            
      sessionStorage.clear();
     this.router.navigate(['/login']);		

    }

  
  }


}
