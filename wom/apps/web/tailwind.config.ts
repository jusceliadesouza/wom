import type { Config } from 'tailwindcss'
import { colors, fonts, radii, spacing } from 'tokens'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors,
    borderRadius: radii,
    spacing,
    
    fontWeight: fonts.fontsWeights,
    fontFamily: {
      sans: fonts.fontsFamilies.default,
    },
    fontSize: fonts.fontsSizes,
    lineHeight: fonts.lineHeights,
  },
  plugins: []
}
export default config
