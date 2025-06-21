export interface IDetallePokemon{
    id: number
    name: string
    sprites: PokemonSprites
}

export interface PokemonSprites{
    front_default: string
    back_default: string
}