'use client';
import Monkey from "../components/Monkey";
import CVSection from "../components/CVSection.tsx";
import ProjectsSection from "../components/ProjectsSection.tsx";
import RecentBlogs from "../components/RecentBlogs.tsx";

export default function Home()
{
  return (
<main>
  <Monkey />
  <RecentBlogs />
  <CVSection />

</main>
  );
}
