import Link from "next/link";
import { posts } from "../../data/posts";
import BlogCard from "../../components/BlogCard";

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-10 pb-20">
      
      {/* Geri Dön Butonu */}
      <div className="max-w-3xl mx-auto px-6 mb-12">
        <Link 
          href="/" 
          className="text-secondary hover:text-accent flex items-center gap-2 transition-colors mb-8 w-fit"
        >
          ← Ana Sayfaya Dön
        </Link>

        {/* Başlık Alanı */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Yazılarım
        </h1>
        <p className="text-xl text-secondary mb-12">
          Matematik, yazılım mimarileri ve teknoloji üzerine düşüncelerim, öğrendiklerim.
        </p>

        {/* Yazı Listesi (Grid yerine alt alta liste şeklinde daha şık durur) */}
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>

    </main>
  );
}
