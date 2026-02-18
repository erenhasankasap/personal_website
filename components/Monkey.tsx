import React from 'react';
import Link from 'next/link';

export default function Monkey() {

  const scrollToCV = () => {
    const cvSection = document.getElementById('cv-section');
    if (cvSection) {
      cvSection.scrollIntoView({ behavior: 'smooth' });

    }
  };
  return(
  <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">

    <span className="text-accent font-medium tracking-widest uppercase mb-4">
    Mathematical Engineer Student
    </span>

    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-primary">
        Eren Hasan KASAP
    </h1>
    
    <p className="text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed mb-10">
        I design digital products by combining data-driven solutions, algorithmic thinking, and modern web technologies.
    </p>

<div className=" flex flex-wrap gap-4">
        <Link 
          href="/projects" 
          className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-all"
        >
          Projelerimi Gör
        </Link>
        
        <button 
          onClick={scrollToCV}
          className="px-8 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-surface transition-all"
        >
          Özgeçmişi İncele
        </button>
        <Link
        href="/blog"
        className="px-8 py-3 bg-surface text-primary font-medium rounded-lg hover:bg-opacity-90 transition-all items-center gap-2 shadow-sm border border-surface hover:border-primary/20 "
      >
        Blogs

        </Link>
      </div>

      {/* ZIPLAYAN OK (SCROLL HINT) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToCV}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-8 h-8 text-secondary opacity-70"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

    </section>
  );
}
