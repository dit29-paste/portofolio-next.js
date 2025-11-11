// postcss.config.mjs
const config = {
plugins: {
'@tailwindcss/postcss': {},
},
};

export default config;
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/app//*.{js,jsx,ts,tsx}",
"./src/components//*.{js,jsx,ts,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}