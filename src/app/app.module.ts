import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoComponent } from './empleado/lista/empleado.component';
import { RegistrarComponent } from './empleado/registrar/registrar.component';
import { FormsModule } from '@angular/forms';
import { ActualizarComponent } from './empleado/actualizar/actualizar.component';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    RegistrarComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
