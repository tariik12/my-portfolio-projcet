/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#5b99d8",
      
"secondary": "#a34a23",
      
"accent": "#747bdb",
      
"neutral": "#181c25",
      
"base-100": "#202c46",
      
"info": "#6ca8d0",
      
"success": "#149f6c",
      
"warning": "#f4b20b",
      
"error": "#fb2d09",
      },
    },
  ],
  plugins: [require("daisyui")],
}

