import { Component } from '@angular/core';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent {
  nombre: string;
  poder: number;

  constructor() {
    this.nombre = "";
    this.poder = 0;
  }
}
