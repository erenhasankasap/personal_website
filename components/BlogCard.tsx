import React from 'react';
import Link from 'next/link';
import { BlogPost } from '../data/posts';

export default function BlogCard({ slug, title, excerpt, date, readTime, category }: BlogPost) {
  return (
    <Link href={`/blog/${slug}`} className="group block bg-surface rounded-2xl border border-surface shadow-sm hover:shadow-md p-6 md:p-8 transition-all hover:-translate-y-1">
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
          {category}
        </span>
        <div className="flex items-center text-sm text-secondary gap-3">
          <span>{date}</span>
          <span className="w-1 h-1 bg-secondary rounded-full"></span>
          <span>{readTime}</span>
        </div>
      </div>

      {/* Başlık */}
      <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>

      {/* Özet */}
      <p className="text-secondary leading-relaxed mb-6">
        {excerpt}
      </p>

      {/* Okumaya Devam Et Linki */}
      <div className="inline-flex items-center text-primary font-medium group-hover:text-accent transition-colors">
        Makaleyi Oku 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>

    </Link>
  );
}
