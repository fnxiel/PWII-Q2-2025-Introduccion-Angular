import { Component , OnInit} from '@angular/core';
import { Pokeapi } from '../pokeapi';
import { IListadoPokemon } from '../types/IListadoPokemon';
import { IPokemon } from '../types/IPokemon';
import { IDetallePokemon } from '../types/IDetallePokemon';

@Component({
  selector: 'app-pokedex',
  imports: [],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.scss'
})
export class Pokedex implements OnInit {
  pokemons: IListadoPokemon = {
    count: 0,
    next: '',
    previous: null,
    results: []
  }

  pokemonSeleccionado?: IPokemon
  detallePokemonSeleccionado?: IDetallePokemon

  constructor(private pokeapi: Pokeapi){}

  ngOnInit(): void {
    this.pokeapi.getPokemons().subscribe(resultado => {
      this.pokemons = resultado
    })
  }

  seleccionarPokemon(pokemon: IPokemon){
    this.pokemonSeleccionado = pokemon
    console.log("Seleccionado el pokemon", pokemon)
    this.pokeapi.getDetallesPokemon(this.pokemonSeleccionado.url).subscribe(
      detalle => this.detallePokemonSeleccionado = detalle
    )
  }

}
