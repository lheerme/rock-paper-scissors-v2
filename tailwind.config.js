/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Barlow Semi Condensed, sans-serif',
      },
      backgroundImage: {
        triangle: "url('/src/assets/bg-triangle.svg')",
        pentagon: "url('/src/assets/bg-pentagon.svg')",
      },
      keyframes: {
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'fade-in-delay': {
          '0%': { opacity: 0 },
          '75%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'scale-in': {
          '0%': { width: 0, scale: 0 },
          '50%': { width: 0, scale: 0 },
          '80%': { width: '100%', scale: 0 },
          '100%': { scale: 1 },
        },
        'winner-shadow': {
          '0%': {
            boxShadow:
              '0px 0px 0px 0px rgb(255 255 255 / 4%), 0px 0px 0px 0px rgb(255 255 255 / 4%), 0px 0px 0px 0px rgb(255 255 255 / 4%)',
          },
          '100%': {
            boxShadow:
              '0px 0px 0px 90px rgb(255 255 255 / 0%), 0px 0px 0px 180px rgb(255 255 255 / 0%), 0px 0px 0px 260px rgb(255 255 255 / 0%)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease 0s 1 normal forwards',
        'fade-in-winner':
          'fade-in 0.5s ease 0s 1 normal forwards, winner-shadow 2s ease 3s infinite normal forwards',
        'fade-in-delay-2': 'fade-in-delay 2s ease 0s 1 normal forwards',
        'fade-in-delay-4': 'fade-in-delay 3s ease 0s 1 normal forwards',
        'scale-in': 'scale-in 4s ease 0s 1 normal forwards',
        'winner-shadow': 'winner-shadow 2s ease 3s infinite normal forwards',
        'fade-in-delay-winner':
          'fade-in-delay 2s ease 0s 1 normal forwards, winner-shadow 2s ease 3s infinite normal forwards',
      },
      screens: {
        mobile: '575px',
      },
    },
  },
  plugins: [],
}
