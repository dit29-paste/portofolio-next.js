// src/components/Navbar.js

import Link from 'next/link';
export default function Navbar() {
return (
<nav className="bg-primary p-4 shadow-lg">
<div className="container mx-auto flex justify-between items-center">
<Link href="/" className="text-light text-2xl font-bold hover:text-accent
transition-colors duration-300">
Portofolio
</Link>
<div className="flex gap-2">
<Link href="/" className="text-gray-300 hover:bg-secondary hover:text-light px-3 py-2
rounded-md transition-all duration-300">

Home
</Link>
<Link href="/about" className="text-gray-300 hover:bg-secondary hover:text-light px-3
py-2 rounded-md transition-all duration-300">
About
</Link>
{/* Tambahkan ini */}
<Link href="/posts" className="text-gray-300 hover:bg-secondary hover:text-light px-3
py-2 rounded-md transition-all duration-300">
Posts
</Link>
<Link href="/contact" className="text-gray-300 hover:bg-secondary hover:text-light px-3
py-2 rounded-md transition-all duration-300">
Contact
</Link>
</div>
</div>
</nav>
);
}