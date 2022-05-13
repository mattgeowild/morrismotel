module.exports = {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Public Sans', "sans-serif"],
        'mono': ['Fira Code', "monospaced"]
      }
    }
  },
  daisyui: {
    themes: [
      {
        night: {
          ...require("daisyui/src/colors/themes")["[data-theme=night]"],
          "base-100": "#000",
        }
      },
      {
        winter: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        },
      },
    ],
  }
}


