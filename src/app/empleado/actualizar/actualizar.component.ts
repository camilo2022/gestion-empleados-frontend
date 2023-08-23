import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../servicio/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../modelo/empleado';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent {

  id:number;
  empleado:Empleado = new Empleado();
  constructor(private empleadoService:EmpleadoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerEmpleado();
  }

  obtenerEmpleado(){
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(
      data =>{
        this.empleado = data;
        console.log(this.empleado);
      },
      error => {
        console.log(error);
      }
    )
  }

  actualizarEmpleado(){
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
        this.empleadoService.actualizarEmpleado(this.id,this.empleado).subscribe(
          data => {
            this.irALaListaDeEmpleados();
            Swal.fire({
              icon: 'success',
              title: 'Empleado agregado',
              text: 'El empleado ha sido actualizado con exito',
            })
          },
          error => {
            this.actualizarEmpleado();
            Swal.fire({
              icon: 'error',
              title: 'Ooops...',
              text: 'Ocurrio un error al actualizar el empleado',
            })
          }
        )
      }else{
        Swal.fire({
          icon: 'info',
          title: 'Accion cancelada',
          text: 'No se actualizo el empleado',
        })
      }
    })
  }

  irALaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
  }

  onSubmit(){
    this.actualizarEmpleado();
  }
}
