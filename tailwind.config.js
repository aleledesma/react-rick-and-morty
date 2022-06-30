/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(-20px)' }
        }
      },
      animation: {
        'float': 'floating 3s ease-in-out infinite',
      },
      spacing: {
        'custom': '550px'
      }
    },
  },
  plugins: [],
}
