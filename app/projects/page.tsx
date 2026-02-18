import ProjectsSection from "../../components/ProjectsSection";
import GithubActivity from "../../components/GithubActivity";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-10">
      {/* Geri Dön Butonu (UX için önemli) */}
      <div className="max-w-5xl mx-auto px-6 mb-4">
        <Link 
          href="/" 
          className="text-secondary hover:text-accent flex items-center gap-2 transition-colors"
        >
          ← Ana Sayfaya Dön
        </Link>
      </div>

      <ProjectsSection />
      <GithubActivity />
    </main>
  );
}
