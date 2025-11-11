// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
"./src/app/**/*.{js,jsx,ts,tsx}",
"./src/components/**/*.{js,jsx,ts,tsx}",
],
theme: {
extend: {
colors: {
'primary': '#1D2B53',
'secondary': '#7E2553',
'accent': '#FF004D',
'light': '#FAEF5D',
},
// Tambahkan ini
fontFamily: {
sans: ['var(--font-poppins)'], // Mengganti font default (sans-serif)
heading: ['var(--font-montserrat)'], // Membuat utility class baru 'font-heading'
},
},
},
plugins: [],
}