'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-surface">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-end">
        <ul className="flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-accent bg-accent/10'
                      : 'text-secondary hover:text-primary hover:bg-surface'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
