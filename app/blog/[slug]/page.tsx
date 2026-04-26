import { posts } from "../../../data/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import type { Metadata } from "next";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen py-20 px-6 max-w-3xl mx-auto">
      <Link
        href="/blog"
        className="text-secondary hover:text-accent flex items-center gap-2 transition-colors mb-12 w-fit font-medium"
      >
        ← Back to Posts
      </Link>

      <article>
        <header className="mb-12 border-b border-surface pb-8">
          <div className="flex flex-wrap items-center gap-4 text-secondary text-sm font-medium mb-6">
            <span className="text-accent bg-accent/10 px-3 py-1 rounded-full uppercase tracking-wider text-xs">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span className="w-1.5 h-1.5 bg-surface rounded-full"></span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            {post.title}
          </h1>
        </header>

        {/* 2. IMPORTANT HERE: Set font to Lora and added classes to improve readability */}
        <div className={`prose prose-lg dark:prose-invert max-w-none ${lora.className}`}>
          
          <p className="text-xl leading-relaxed text-secondary font-medium mb-12 font-sans">
            {post.excerpt}
          </p>
          
          {/* Markdown content (prose plugin will automatically format headings and lists) */}
          <div className="text-primary leading-loose space-y-6 text-large">
            <ReactMarkdown 
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {post.content}
        </ReactMarkdown>
          </div>
          
        </div>
      </article>
    </main>
  );
}
