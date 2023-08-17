/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'sm': '380px',
        'sm1': '440px',
        'sm2': '500px',
        'sm5': '630px',
        'sm10': '642px',
        'sm6': '680px',
        'sm7': '555px',
        'sm3': '995px',
        'sm4': '590px',
        'md': '795px',
        'md3': '840px',
        'md1': '825px',
        'lg': '1024px',
        'lgp': '1060px',
        'lgm': '1120px',
        'lg1': '1140px',
        'lg2': '1160px',
        'xl': '1280px',
        'xl1': '1385px',
        'xl2': '1200px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
} 