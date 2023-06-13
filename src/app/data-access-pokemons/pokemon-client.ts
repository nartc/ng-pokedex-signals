import { CacheOptions, buildKeyGenerator, defaultKeyGenerator } from 'axios-cache-interceptor';
import { PokemonClient } from 'pokenode-ts';
import { createInjectionToken } from '../shared-utils/injection-token';

function pokemonClientCacheOptionsFactory() {
    return {
        generateKey: buildKeyGenerator((request) => {
            if (request.params) {
                return {
                    method: request.method,
                    url: request.url,
                    params: request.params.toString(),
                };
            }
            return defaultKeyGenerator(request);
        }),
    } as CacheOptions;
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
