/** @type {import('tailwindcss').Config} */
const { transform } = require('framer-motion');
const colors=require('tailwindcss/colors')
const plugin=require("tailwindcss/plugin");
const Myclass = plugin(function ({addUtilities})
{addUtilities({
  ".my-rotate-y-180":{
    transform:"rotateY(180deg)",
  },
  '.preserve-3d':{
    transformStyle:"preserve-3d",
  },
  ".perspective":{
    perspective:"1000px",
  },
  ".backface-hidden":{
    backfaceVisibility:"hidden",
  },
})
})
module.exports = {
  // mode:'jit',
  // purge:['./public/**/*.html','./src/**/*.{js,jsx,ts,tsx,vue}'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "dark-purple":"#081A51",
        'light-white':'rgba(255,255,255,0.18)',
        "light-gray":"#e2e2e2"
      }
    },
  },
  plugins: [Myclass],
}