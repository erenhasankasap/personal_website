import React from 'react';
import Link from 'next/link';
import BlogCard from './BlogCard';
import { posts } from '../data/posts';

export default function RecentBlogs() {
  // Sadece ilk 3 postu al (Fragman)
  const recentPosts = posts.slice(0, 3);

  return (
    // ID'yi 'recent-blogs' yaptık ki ok buraya kayabilsin
    <section id="recent-blogs" className="py-20 px-6 max-w-5xl mx-auto min-h-screen flex flex-col justify-center">
      
      {/* Başlık Alanı */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Son Yazılarım
        </h2>
        <p className="text-secondary text-lg">
          Matematik, yazılım mimarileri ve teknoloji üzerine düşüncelerim.
        </p>
      </div>

      {/* 3'lü Yazı Listesi */}
      <div className="flex flex-col gap-6 mb-12">
        {recentPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>

      {/* Daha Fazla Göster Butonu */}
      <div className="flex justify-center">
        <Link 
          href="/blog" 
          className="group px-8 py-3 bg-surface border border-surface text-primary font-medium rounded-lg hover:border-primary/20 transition-all shadow-sm flex items-center gap-2"
        >
          See all the blogs
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

    </section>
  );
}
