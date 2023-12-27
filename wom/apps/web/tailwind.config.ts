import type { Config } from 'tailwindcss'
import { colors, fonts, radii, spacing } from 'tokens'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    backgroundImage: theme => ({
      gradient:
        'linear-gradient(90deg, #ff87af 0%, #ff87af 30%, #ff87af 50%, #ff87af 100%)',
      'gradient-text': 'linear-gradient(45deg, #ff87af,#ffda5f )'
    }),
    colors,
    borderRadius: radii,
    spacing,

    fontWeight: fonts.fontsWeights,
    fontFamily: {
      sans: fonts.fontsFamilies.default
    },
    fontSize: fonts.fontsSizes,
    lineHeight: fonts.lineHeights
  },
  plugins: []
}
export default config
