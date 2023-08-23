import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../modelo/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Esta url obtiene el listado de empleados en el backend
  private baseUrl = 'http://localhost:8090/api/v1/empleados';

  constructor(private httpClient : HttpClient) { }

  //Con este metodo obtenemos los empleados
  obtenerListaDeEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>( `${this.baseUrl}` );
  }

  //Con este metodo registramos un empleado
  registrarEmpleado(empleado:Empleado):Observable<Object>{
    return this.httpClient.post( `${this.baseUrl}`,empleado );
  }

  actualizarEmpleado(id:number, empleado:Empleado):Observable<Object>{
    return this.httpClient.put( `${this.baseUrl}/${id}`,empleado );
  }

  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>( `${this.baseUrl}/${id}` );
  }

  eliminarEmpleado(id:number):Observable<Object>{
    return this.httpClient.delete( `${this.baseUrl}/${id}` );
  }
}
