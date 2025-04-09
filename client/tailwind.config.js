/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'soft-green': 'hsl(var(--soft-green))',
        'light-beige': 'hsl(var(--light-beige))',
        'warm-white': 'hsl(var(--warm-white))',
        'accent-red': 'hsl(var(--accent-red))',
        'dark-green': 'hsl(var(--dark-green))',
        'text-dark': 'hsl(var(--text-dark))',
        'text-medium': 'hsl(var(--text-medium))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}