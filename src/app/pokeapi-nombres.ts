import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiNombres {
  pokemon: string[] = []
  constructor() { }

  agregarPokemon(nombre: string){
    this.pokemon.push(nombre)
  }
}
