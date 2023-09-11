/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      screens: {
        'sxx': '350px',
        'sx': '540px',
        'ms': '510px',
      },
    },
  },
  plugins: []
}
