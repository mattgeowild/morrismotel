const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{astro,html,svelte,vue,js,ts}", "./node_modules/flowbite/**/*.js"],
  plugins: [require("@tailwindcss/typography"), require('flowbite/plugin')],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Code", "monospaced", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  darkMode: 'class'
};
