import { FormEditarColaboradorModule } from './form-editar-colaborador/form-editar-colaborador.module';
import { FormCadastrarColaboradorModule } from './form-cadastrar-colaborador/form-cadastrar-colaborador.module';
import { CargoService } from './providers/cargo.service';
import { routing } from './app.routing';
import { CargoModule } from './cargo/cargo.module';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from './providers/colaborador.service';
import { UtilsService } from './utils/utils.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    ColaboradorModule,
    CargoModule,
    HttpClientModule,
    NgbModule,
    routing,
    RouterModule,
    FormCadastrarColaboradorModule,
    ReactiveFormsModule,
    FormEditarColaboradorModule,
    FormsModule
  ],
  providers: [
    ApiService,
    CargoService,   
    UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
