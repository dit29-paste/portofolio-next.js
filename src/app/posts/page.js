// src/app/posts/page.js
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PostsPage() {

const [posts, setPosts] = useState([]);
// Langkah 1: Tambahkan state baru untuk loading dan error
const [loading, setLoading] = useState(true); // Awalnya, kita set loading ke true
const [error, setError] = useState(null);

useEffect(() => {
const fetchPosts = async () => {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
if (!response.ok) {
// Jika respons dari server tidak oke (misal: error 404 atau 500)
throw new Error('Gagal mengambil data');
}
const data = await response.json();
setPosts(data);
} catch (err) {
// Jika terjadi error (misal: tidak ada koneksi internet)
setError(err.message);
} finally {
// Apapun yang terjadi (berhasil atau gagal), set loading ke false
setLoading(false);
}
};

fetchPosts();
}, []);

// Langkah 2: Tampilkan UI berdasarkan state loading
if (loading) {
return <p className="text-center mt-10">Loading...</p>;
}

// Langkah 3: Tampilkan UI berdasarkan state error
if (error) {
return <p className="text-center mt-10 text-red-500">Error: {error}</p>;
}

// Langkah 4: Jika tidak loading dan tidak error, tampilkan datanya
return (
<main className="container mx-auto px-4 py-8">
<h1 className="text-4xl font-bold text-center mb-8 font-heading">Daftar Postingan</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{posts.map((post) => (
<div key={post.id} className="border rounded-lg p-4 shadow-md bg-white
hover:shadow-xl transition-shadow">
<h2 className="text-xl font-bold mb-2 font-heading truncate">{post.title}</h2>
<p className="text-gray-700">{post.body.substring(0, 100)}...</p>

</div>
))}
</div>
</main>
);
}