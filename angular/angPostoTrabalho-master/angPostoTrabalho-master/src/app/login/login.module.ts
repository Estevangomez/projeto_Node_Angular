import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { FormLoginComponent } from './form-login/form-login.component';




@NgModule({
  declarations: [LoginComponent, FormLoginComponent],
  imports: [
    CommonModule,     
    LoginRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class LoginModule { }
