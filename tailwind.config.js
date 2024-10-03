module.exports = {
  content: [
    './public/**/*.html',//Cerca file HTML nella cartella public
    './src/**/*.js',// Cerca file JavaScript nella cartella src
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),      // Attiva DaisyUI
    require('flowbite/plugin'),  // Attiva Flowbite
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],  // Aggiungi i temi di DaisyUI (opzionale)
  },
}


