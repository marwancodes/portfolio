/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatImage: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2.4rem)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        floatImage: 'floatImage 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}