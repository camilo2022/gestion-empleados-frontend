import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/lista/empleado.component';
import { RegistrarComponent } from './empleado/registrar/registrar.component';
import { ActualizarComponent } from './empleado/actualizar/actualizar.component';


const routes: Routes = [
  { path: 'empleados', component: EmpleadoComponent},
  { path: '', redirectTo:'empleados', pathMatch: 'full'},
  { path: 'empleados/create', component: RegistrarComponent},
  { path: 'empleados/update/:id', component: ActualizarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
