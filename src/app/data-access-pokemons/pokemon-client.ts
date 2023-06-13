import { CacheOptions } from 'axios-cache-interceptor';
import { PokemonClient } from 'pokenode-ts';
import { createInjectionToken } from '../shared-utils/injection-token';

function pokemonClientCacheOptionsFactory() {
    return {} as CacheOptions;
}

export const [, providePokemonClientCacheOptions, POKEMON_CLIENT_CACHE_OPTIONS] = createInjectionToken(
    pokemonClientCacheOptionsFactory
);

function pokemonClientFactory(cacheOptions: CacheOptions) {
    return new PokemonClient({ cacheOptions });
}

export const [, , POKEMON_CLIENT] = createInjectionToken(pokemonClientFactory, {
    deps: [POKEMON_CLIENT_CACHE_OPTIONS],
});
