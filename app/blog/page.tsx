import React from 'react';
import Link from 'next/link';
import BlogCard from '../../components/BlogCard';
import { getAllPosts } from '../../lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on mathematics, software architecture, and technology by Eren Hasan Kasap.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  return (
    <main className="min-h-screen pt-20 px-6 max-w-5xl mx-auto">
      {/* Header Area */}
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
