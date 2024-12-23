/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(1.5)', opacity: 0 },
        },
      },
      animation: {
        ripple: 'ripple 1.5s ease-out infinite',
      },
    },
  },
  plugins: [],
};