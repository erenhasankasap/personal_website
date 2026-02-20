import React from 'react';
import Link from 'next/link';
import BlogCard from '../../components/BlogCard';
import { posts } from '../../data/posts';

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen pt-20 px-6 max-w-5xl mx-auto">
      
      {/* Back Button (Geri Dönüş Butonu) */}
      <div className="mb-8">
        <Link
          href="/"
          className="text-secondary hover:text-accent flex items-center gap-2 transition-colors w-fit font-medium"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Header Area (Başlık Alanı) */}
      <div className="mb-12 border-b border-surface pb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
          All Posts
        </h1>
        <p className="text-xl text-secondary leading-relaxed">
          A complete archive of my thoughts on mathematics, software architecture, and technology.
        </p>
      </div>

      {/* All Posts List (Tüm Yazıların Listelendiği Yer) */}
      <div className="flex flex-col gap-6 mb-20">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
      
    </main>
  );
}
