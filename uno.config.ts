import {
  defineConfig,
  presetWind3,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      sky: {
        light: '#B8E2FF',
        DEFAULT: '#89CFF0',
        dark: '#5BB3E0',
      },
      rose: {
        light: '#E8789A',
        DEFAULT: '#D44B6D',
        dark: '#B03355',
      },
      leaf: {
        light: '#B5D09A',
        DEFAULT: '#9AB973',
        dark: '#7A9E55',
      },
      sunshine: {
        light: '#FADF7F',
        DEFAULT: '#F8D34F',
        dark: '#E6BC2A',
      },
      orange: {
        light: '#FFB088',
        DEFAULT: '#FF6B35',
        dark: '#E84E1B',
      },
      coral: {
        light: '#FF9E8A',
        DEFAULT: '#FF6F5E',
        dark: '#E84D3D',
      },
      tt: {
        red: '#E23741',
        cream: '#FEF6E4',
        warm: '#FFF9F0',
      },
    },
    fontFamily: {
      zabal: ['Zabal', 'system-ui', 'sans-serif'],
      dosis: ['Dosis', 'system-ui', 'sans-serif'],
    },
  },
  presets: [
    presetWind3(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        dosis: [
          { name: 'Dosis', weights: [300, 400, 500, 600, 700, 800] },
        ],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  shortcuts: {
    'section-container': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    'section-padding': 'py-16 md:py-24 lg:py-32',
    'heading-display': 'font-zabal font-bold tracking-tight',
    'heading-sub': 'font-dosis font-semibold',
    'body-text': 'font-dosis font-normal leading-relaxed',
    'card-base': 'rounded-3xl p-6 md:p-8 transition-all duration-300',
    'btn-wa': 'inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-dosis font-semibold rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg',
  },
})
