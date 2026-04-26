import Monkey from "../components/Monkey";
import CVSection from "../components/CVSection";
import RecentBlogs from "../components/RecentBlogs";

export default function Home() {
  return (
    <main>
      <Monkey />
      <RecentBlogs />
      <CVSection />
    </main>
  );
}
