import { Component, OnInit } from '@angular/core';
import { PokeapiNombres } from '../pokeapi-nombres';

@Component({
  selector: 'app-pagina2',
  imports: [],
  templateUrl: './pagina2.html',
  styleUrl: './pagina2.scss'
})
export class Pagina2 implements OnInit {
  listadoPokemon : string[] = []

  constructor(public pokeapiService: PokeapiNombres){}

  ngOnInit(): void {
    this.listadoPokemon = this.pokeapiService.pokemon
  }


}
