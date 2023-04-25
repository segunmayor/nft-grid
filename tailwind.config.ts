/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      screens: {
        sm: '640px', 
        // => @media min-width: 640px

        md: '768px',
         // => @media min-width: 768px

        lg: '1024px',
         // => @media min-width: 1024px

        xl: '1280px'
         // => @media min-width: 1280px
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      fontSize: {
        h1: 3 + 'rem',
      },
      extend: {},
    },
    plugins: [
      [
        "postcss-preset-env",
        {
        tailwindcss: {},
        autoprefixer: {},
      }
    ]
    ],
  }