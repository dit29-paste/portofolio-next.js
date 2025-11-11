// src/app/layout.js
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// Langkah 1: Import font yang kita mau dari next/font/google
import { Montserrat, Poppins } from "next/font/google";

// Langkah 2: Konfigurasi font
const montserrat = Montserrat({
subsets: ["latin"],
weight: ['400', '700'], // Kita ambil ketebalan reguler dan bold
variable: '--font-montserrat', // Kita buat sebagai CSS variable
});

const poppins = Poppins({
subsets: ["latin"],
weight: ['400', '600'],
variable: '--font-poppins',

});

export const metadata = {
title: "Portofolio Saya",
description: "Sebuah portofolio web yang dibuat dengan Next.js",
};

export default function RootLayout({ children }) {
return (
<html lang="en">
{/* Langkah 3: Terapkan variabel font ke tag <body> */}
<body className={`${montserrat.variable} ${poppins.variable} flex flex-col
min-h-screen`}>
<Navbar />
{children}
<Footer />
</body>
</html>
);
}