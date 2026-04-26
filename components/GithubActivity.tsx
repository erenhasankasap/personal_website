'use client';

import React, { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubActivity() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl border border-surface shadow-sm p-6 md:p-10">
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
            colorScheme="light"
          />
        </div>
      </div>
    </section>
  );
}
