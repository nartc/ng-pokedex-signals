import type { PokemonClient } from 'pokenode-ts';
import { createInjectionToken } from '../shared-utils/injection-token';
import { POKEMON_CLIENT } from './pokemon-client';

function pokemonsServiceFactory(client: PokemonClient) {
    return {
        listPokemons: async (offset = 0) => {
            const { count, results } = await client.listPokemons(offset, 21);
            const pokemons = await Promise.all(results.map((result) => client.getPokemonByName(result.name)));
            return { count, pokemons };
        },
    };
}

export type PokemonsService = ReturnType<typeof pokemonsServiceFactory>;

export const [, , POKEMONS_SERVICE] = createInjectionToken(pokemonsServiceFactory, {
    deps: [POKEMON_CLIENT],
});
