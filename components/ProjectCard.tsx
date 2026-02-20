'use client';

import React, { useState } from 'react';
import { Project } from '../data/projects';

export default function ProjectCard({ title, description, techStack, link, generalPurpose, myRole }: Project) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
       <div
      onClick={() => setIsExpanded(!isExpanded)}
      className={`group block bg-white rounded-2xl border border-surface shadow-sm hover:shadow-xl p-8 transition-all duration-300 ease-in-out cursor-pointer ${
        isExpanded ? 'scale-[1.02] shadow-xl border-accent/20' : 'hover:-translate-y-2'
      }`}
        > 
      <div className="flex items-start justify-between mb-4">
        <h3 className={`text-2xl font-bold transition-colors min-h-[4rem] pr-4 ${isExpanded ? 'text-accent' : 'text-primary group-hover:text-accent'}`}>
          {title}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-6 h-6 text-secondary transition-transform duration-300 flex-shrink-0 ${
            isExpanded ? 'rotate-180 text-accent' : 'group-hover:text-accent group-hover:translate-y-1'
          }`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      <p className="text-secondary mb-6 leading-relaxed min-h-[5rem]">
        {description}
      </p>

      {/* YENİ: Teknoloji etiketleri her zaman görünür (Zıplamayı engeller) */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-surface text-primary text-sm font-medium px-3 py-1 rounded-full border border-primary/5"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GENİŞLEYEN ALAN */}
      <div className={`grid transition-all duration-500 ease-in-out ${
        isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'
      }`}>
        <div className="overflow-hidden">
          <div className="border-t border-surface pt-6 space-y-6">
            <div>
              <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">1. General Purpose</h4>
              <p className="text-secondary leading-relaxed">{generalPurpose}</p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">2. My Role</h4>
              <p className="text-secondary leading-relaxed">{myRole}</p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">3. Project Link</h4>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Linke tıklayınca kartın kapanmasını engeller
                className="inline-flex items-center text-accent hover:underline font-medium"
              >
                View Project
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
