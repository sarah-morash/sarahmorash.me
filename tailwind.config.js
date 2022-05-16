module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  // darkMode: false, // or 'media' or 'class'
  // theme: {
  //   colors: {
  //     transparent: 'transparent',
  //     current: 'currentColor',
  //     blue: {
  //       light: '#16e3ff',
  //       DEFAULT: '#00b0c8',
  //       dark: '#006d7c',
  //     },
  //     pink: {
  //       light: '#FFDCE5',
  //       DEFAULT: '#ff8cab',
  //       dark: '#E57E99',
  //     },
  //     yellow: {
  //       dark: '#ebcaa50',
  //       DEFAULT: '#f3df95',
  //       light: '#fbf4da',
  //     },
  //     purple: {
  //       dark: '#3a2697',
  //       DEFAULT: '#563bce',
  //       light: '#8b78dd',
  //     },
  //     gray: {
  //       dark: '#3c4858',
  //       DEFAULT: '#c0ccda',
  //       light: '#e0e6ed',
  //     }
  //   }
  // },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["cyberpunk"],
    base: true,
    utils: true,
    logs: true,
    rtl: false
  }
};
