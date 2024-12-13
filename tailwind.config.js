/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite',  // Add custom marquee animation
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },  // Start from the right
          '100%': { transform: 'translateX(-100%)' }, // End at the left
        },
      },
    },
  },
  plugins: [],
}
