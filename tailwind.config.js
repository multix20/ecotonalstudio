/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'studio-purple': {
          400: '#a78bfa',
          500: '#8b5cf6',
          900: '#4c1d95',
        },
        'studio-pink': {
          500: '#ec4899',
          600: '#db2777',
          900: '#831843',
        },
      },
      animation: {
        'waveform': 'pulse 1.5s infinite',
      },
    },
  },
  plugins: [],
}
