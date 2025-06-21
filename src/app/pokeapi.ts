import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IListadoPokemon } from './types/IListadoPokemon';
import { IDetallePokemon } from './types/IDetallePokemon';
import { Observable } from 'rxjs';
import { IPokemon } from './types/IPokemon';

@Injectable({
  providedIn: 'root'
})
export class Pokeapi {
  private urlBase = 'https://pokeapi.co/api/v2/'

  constructor(private cliente: HttpClient){}

  getPokemons(): Observable<IListadoPokemon>{
    const resultado = this.cliente.get<IListadoPokemon>(`${this.urlBase}pokemon`)
    return resultado
  }

  getDetallesPokemon(url: string): Observable<IDetallePokemon>{
    return this.cliente.get<IDetallePokemon>(url)
  }
  
}
