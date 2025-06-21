import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  imports: [],
  templateUrl: './pagina1.html',
  styleUrl: './pagina1.scss'
})
export class Pagina1 implements OnInit {
  idProducto: number = 0

  constructor(
    private ruta: ActivatedRoute
  ){
    console.log("constructor")
  }

  ngOnInit(): void {
    console.log("Oninit")
    this.ruta.queryParams.subscribe( params => 
    {
      console.log(params)
      this.idProducto = Number(params["idProducto"])
    })
    //throw new Error('Method not implemented.');
  }

  
}
