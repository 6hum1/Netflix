/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/docs/img/netflix-background.jpg')",
        
       }
    },
  },
  plugins: [],
}

