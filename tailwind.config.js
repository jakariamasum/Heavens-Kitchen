/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#7db1ed",
        
"secondary": "#f4b7c8",
        
"accent": "#226e7f",
        
"neutral": "#252B3C",
        
"base-100": "#E7E6EB",
        
"info": "#37AACD",
        
"success": "#58DFBB",
        
"warning": "#E6820F",
        
"error": "#EB6B84",
        },
      },
    ],
  },
  plugins: [require("daisyui")]

}

