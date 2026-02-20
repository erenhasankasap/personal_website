'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

export default function Monkey() {
  
  const scrollToCV = () => {
    const cvSection = document.getElementById('cv-section');
    if (cvSection) cvSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBlogs = () => {
    const blogSection = document.getElementById('recent-blogs');
    if (blogSection) blogSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // min-h-screen ve flex items-center ile içeriği dikeyde ortaladık
    <section className="min-h-screen flex items-center px-6 max-w-6xl mx-auto relative py-20 md:py-0">
      

      {/* ANA FLEX KONTEYNER: Mobilde alt alta, masaüstünde yan yana */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 md:gap-8">

        {/* 1. SOL TARAF: METİN İÇERİĞİ */}
        <div className="flex-1 text-center md:text-left">
          <span className="text-accent font-medium tracking-widest uppercase mb-4 block">
            Mathematical Engineering Student
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-primary leading-tight">
            Eren Hasan KASAP
          </h1>
          <p className="text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed mb-10 mx-auto md:mx-0">
            I design digital products with data-driven solutions, an algorithmic mindset, and modern web technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link 
              href="/projects" 
              className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-all shadow-sm"
            >
              View My Projects
            </Link>
            <button 
              onClick={scrollToCV}
              className="px-8 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-surface transition-all"
            >
              View CV
            </button>
          </div>
        </div>

        <div className="flex-shrink-0 relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 group">
          
          {/* Background Blur Effect (accent-colored aura) */}
          <div className="absolute inset-0 bg-accent/30 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-500"></div>
          
          <Image
            src="/eren-photo.jpg" 
            alt="Eren Hasan Kasap Profile Photo"
            fill 
            className="rounded-full object-cover border-4 border-surface shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
            priority 
          />
        </div>

      </div>

      {/* Bouncing Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToBlogs}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-secondary opacity-70 hover:text-accent transition-colors">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
