import { Component, OnInit } from '@angular/core';
import { Empleado } from '../modelo/empleado';
import { EmpleadoService } from '../servicio/empleado.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  empleado: Empleado = new Empleado();
  constructor(private empleadoService:EmpleadoService, private router:Router) {}

  ngOnInit(): void {
  }

  guardarEmpleado(){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Confirmar si deseas guardar al empleado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , guardar',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.empleadoService.registrarEmpleado(this.empleado).subscribe(
          data => {
            this.irALaListaDeEmpleados();
            Swal.fire({
              icon: 'success',
              title: 'Empleado agregado',
              text: 'El empleado ha sido agregado con exito',
            })
          },
          error => {
            this.irALaListaDeEmpleados();
            Swal.fire({
              icon: 'error',
              title: 'Ooops...',
              text: 'Ocurrio un error al registrar el empleado',
            })
          }
        )
      }else{
        Swal.fire({
          icon: 'info',
          title: 'Accion cancelada',
          text: 'No se registro el empleado',
        })
      }
    })
  }

  irALaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
  }

  onSubmit() {
    this.guardarEmpleado();
  }
}
