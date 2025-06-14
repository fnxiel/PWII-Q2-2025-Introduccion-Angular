import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.scss'
})
export class Producto {
  @Input()nombre = 'Computadora'
  @Input()descripcion = 'Equipo de computo'
  @Input()estado = 'existencia'
}
