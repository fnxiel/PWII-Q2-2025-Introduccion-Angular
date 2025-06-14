import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Producto } from './producto/producto';
import { IProducto } from './types/IProducto';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Producto],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'aplicacion';
  productos: IProducto[] = [
    {
      id: 1,
      nombre: 'Computadora',
      descripcion: 'Equipo de computo',
      estado: 'existencia'
    },
    {
      id: 2,
      nombre: 'Mouse',
      descripcion: 'Accesorio para computadora',
      estado: 'existencia'
    },
    {
      id: 3,
      nombre: 'Monitor',
      descripcion: 'Para ver peliculas',
      estado: 'existencia'
    },
    {
      id: 4,
      nombre: 'Otro producto',
      descripcion: 'Generico',
      estado: 'agotado'
    }]; 

    estadoFiltrado: "existencia" | "agotado" = "existencia"

    productosFiltrados: IProducto[]

    constructor(){
      this.productosFiltrados = this.productos
    }

    filtrarProductos(estado: "existencia" | "agotado"){
      this.productosFiltrados = this.productos.filter(producto => producto.estado === estado)
    }

    agregarProducto(){
      this.productos.push({
        id: this.productos.length + 1,
        nombre: 'Producto nuevo ' + this.productos.length,
        descripcion: 'Descripcion generica',
        estado: 'existencia'
      })
      this.productosFiltrados = this.productos
    }

    eliminarProducto(id: number){
      this.productos = this.productos.filter(producto => producto.id !== id)
      this.productosFiltrados = this.productos
    }
}
