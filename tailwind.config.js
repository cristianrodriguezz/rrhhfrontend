/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'body': '#111927',
        'card': '#1f2a37',
        'primary': '#ffffff',
        'secondary': '#e5e7eb',
        'three': '#9ca3af',
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
]
}