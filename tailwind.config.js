import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'mobile': '350px',
      // => @media (min-width: 350px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors:{
      'body-white': '#f4f1ed',
      'body-brown': '#EFEBE5',
      'color-brown': '#623E2A',
      'color-brown-b': '#623E2A',
      'white': '#fff',
      'black': '#000',
      'blue': '#098590',
      'red': '#900C3F',
      'red2': '#C70039',
    },
    extend: {
      backgroundImage: {
        'home-bg': "url('/home.jpg')",
        'b-footer': "url('/bfooter.jpg')",
      },
    },
    fontFamily:{
      playfair: ["Playfair Display", "serif"],
    },
  },
  plugins: [],
}
export default config
