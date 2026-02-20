'use client';

import React, { useEffect, useState } from 'react';
import {GitHubCalendar} from 'react-github-calendar';
import { useTheme } from 'next-themes';

export default function GithubActivity() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent Next.js hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12">
      <div className="bg-white dark:bg-surface rounded-2xl border border-surface shadow-sm p-6 md:p-10 transition-all">
        
        {/* Üst Başlık */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary mb-2">
            Open Source Contributions
          </h3>
          <p className="text-secondary">
            My daily coding and project development activity on GitHub.
          </p>
        </div>

        <div className="flex justify-center overflow-x-auto pb-4">
          <GitHubCalendar 
            username="erenhasankasap" 
            colorScheme={theme === 'dark' ? 'dark' : 'light'}
          />
        </div>
        
      </div>
    </section>
  );
}
