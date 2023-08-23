import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../servicio/empleado.service';
import { Empleado } from '../modelo/empleado';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  empleados:Empleado[];

  constructor(private empleadoServicio:EmpleadoService,  private router:Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.obtenerEmpleados();
  }

  private obtenerEmpleados(){
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(
      data => {
        this.empleados = data;
        this.dtTrigger.next(null);
      }
    )
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['empleados/update',id]);
  }

  eliminarEmpleado(id:number){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Confirmar si deseas eliminar al empleado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
          Swal.fire({
            icon: 'success',
            title: 'Empleado eliminado',
            text: 'El empleado ha sido eliminado con exito',
          })
        })
      }else{
        Swal.fire({
          icon: 'info',
          title: 'Accion cancelada',
          text: 'No se elimino el empleado',
        })
      }
    })
  }
}
