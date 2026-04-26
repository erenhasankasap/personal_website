import ProjectsSection from "../../components/ProjectsSection";
import GithubActivity from "../../components/GithubActivity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software projects, research, and case studies by Eren Hasan Kasap.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-10">
      <ProjectsSection />
      <GithubActivity />
    </main>
  );
}
