const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,css}'],
    theme: {
        extend: {
            colors: {
                background: '#F6F8FC',
                normal: {
                    DEFAULT: '#B7B7AA',
                    darker: '#88887C',
                },
                fire: {
                    DEFAULT: '#EB5435',
                    darker: '#C65F4A',
                },
                water: {
                    DEFAULT: '#5297F7',
                    darker: '#5E8DCE',
                },
                electric: {
                    DEFAULT: '#F7CE55',
                    darker: '#CEB260',
                },
                grass: {
                    DEFAULT: '#8BCA65',
                    darker: '#84B06B',
                },
                ice: {
                    DEFAULT: '#80CAFA',
                    darker: '#7DB0D0',
                },
                fighting: {
                    DEFAULT: '#AE5B4A',
                    darker: '#9C6458',
                },
                poison: {
                    DEFAULT: '#9F5A96',
                    darker: '#92638C',
                },
                ground: {
                    DEFAULT: '#D7BC65',
                    darker: '#B8A66B',
                },
                flying: {
                    DEFAULT: '#8B98F8',
                    darker: '#848ECE',
                },
                psychic: {
                    DEFAULT: '#EC6298',
                    darker: '#C7688E',
                },
                bug: {
                    DEFAULT: '#ADBA44',
                    darker: '#A39B72',
                },
                rock: {
                    DEFAULT: '#B8AB6F',
                    darker: '#A39B72',
                },
                ghost: {
                    DEFAULT: '#6666B5',
                    darker: '#6C6CA1',
                },
                dragon: {
                    DEFAULT: '#7467E6',
                    darker: '#756CC3',
                },
                dark: {
                    DEFAULT: '#725647',
                    darker: '#736157',
                },
                steel: {
                    DEFAULT: '#AAAABA',
                    darker: '#9A9AA5',
                },
                fairy: {
                    DEFAULT: '#EC6298',
                    darker: '#C7688E',
                },
            },
            fontFamily: {
                sans: ['Outfit', ...defaultTheme.fontFamily.sans],
            },
            height: {
                'pokemons-container': 'calc(100vh - 2rem)',
                'pokemon-container': 'calc(100vh - 7rem)',
            },
            maxHeight: {
                'pokemons-container': 'calc(100vh - 2rem)',
                'pokemon-container': 'calc(100vh - 7rem)',
            },
        },
    },
    plugins: [
        require('daisyui'),
        plugin(({ addBase, theme }) => {
            addBase({
                h1: { fontSize: theme('fontSize.3xl') },
                h2: { fontSize: theme('fontSize.2xl') },
                h3: { fontSize: theme('fontSize.xl') },
                h4: { fontSize: theme('fontSize.lg') },
            });
        }),
    ],
    daisyui: {
        logs: false,
    },
};
