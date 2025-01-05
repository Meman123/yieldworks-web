/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Archivos del App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Archivos del Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // Componentes personalizados
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
