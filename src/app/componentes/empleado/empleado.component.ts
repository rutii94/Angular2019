import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/modelo/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleado:Empleado;
  ocultar:boolean = false;
  constructor() { 
    this.empleado = new Empleado(1,"Juan","Lopez","contabilidad")
  }

  ngOnInit() {
  }
  cambiarVisibilidad(){
    this.ocultar = !this.ocultar;
  }

}
