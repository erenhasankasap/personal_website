import React from 'react';
import Link from 'next/link';
import BlogCard from './BlogCard';
import { posts } from '../data/posts';

export default function RecentBlogs() {
  // Get only the first 3 posts (Preview)
  const recentPosts = posts.slice(0, 3);

  return (
    // Set ID to 'recent-blogs' so the arrow can scroll here
    <section id="recent-blogs" className="py-20 px-6 max-w-5xl mx-auto min-h-screen flex flex-col justify-center">
      
      {/* Title Area */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Recent Posts
        </h2>
        <p className="text-secondary text-lg">
          My thoughts on mathematics, software architectures, and technology.
        </p>
      </div>

      {/* 3-Post List */}
      <div className="flex flex-col gap-6 mb-12">
        {recentPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>

      {/* Show More Button */}
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
