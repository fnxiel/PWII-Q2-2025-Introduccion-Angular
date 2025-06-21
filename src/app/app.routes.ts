import { Routes } from '@angular/router';
import { Pagina1 } from './pagina1/pagina1';
import { Pagina2 } from './pagina2/pagina2';
import { Pokedex } from './pokedex/pokedex';

export const routes: Routes = [
    {path: "pagina1", component: Pagina1 },
    {path: "pagina2", component: Pagina2},
    {path : "pokedex", component: Pokedex}
];
