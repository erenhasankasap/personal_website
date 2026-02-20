import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Popüler ikon seti

export default function Footer() {
  return (
    // border-t ile üstüne ince, şık bir çizgi çekiyoruz
    <footer className="w-full py-8 border-t border-surface mt-auto">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-4">
        
        {/* İkonların Dizildiği Kutu */}
        <div className="flex justify-center gap-8">
          
          {/* GitHub Butonu */}
          {/* text-secondary (silik gri) -> hover:text-primary (vurgulu renk) */}
          <a 
            href="https://github.com/erenhasankasap" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-secondary hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-7 h-7" />
          </a>

          {/* LinkedIn Butonu */}
          <a 
            href="https://linkedin.com/in/erenkasap" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-secondary hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-7 h-7" />
          </a>

          {/* E-posta Butonu */}
          <a 
            href="mailto:erenhasankasap35@gmail.com" 
            className="text-secondary hover:text-primary transition-colors"
            aria-label="E-Mail"
          >
            <FaEnvelope className="w-7 h-7" />
          </a>
        </div>

        {/* Küçük ve şık bir telif yazısı (Opsiyonel ama profesyonel durur) */}
        <div className="text-sm text-secondary/60">
          © {new Date().getFullYear()} Eren Hasan Kasap. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
}
