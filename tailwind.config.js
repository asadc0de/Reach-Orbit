/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        matter: ['Matter Light', 'sans-serif'],
      },
      colors: {
        'ro-black': '#0a0a0f',
        'ro-dark': '#18122B',
        'ro-purple': '#5f2eea',
        'ro-violet': '#7c3aed',
        'ro-accent': '#a084e8',
        'ro-gray': '#232136',
      },
    },
  },
  plugins: [],
};
