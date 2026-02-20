export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const posts: BlogPost[] = [
  // 1. PINNED POST: Personal Portfolio
  {
    slug: "modern-portfolio-architecture",
    title: "Modern Portfolio Architecture: Next.js & Tailwind v4",
    excerpt: "Building a Dark Mode supported, high-performance personal website by separating Server and Client components.",
    date: "Feb 20, 2026",
    readTime: "7 min read",
    category: "Web Development",
    content: `
As a software developer, it's not just about writing good code; it's also about how you present that code, your projects, and your vision. Combining my analytical thinking from Mathematical Engineering with my passion for system programming, I decided to build a modern, fast, and highly personal digital laboratory.

### Why Not Use a Template?
Using WordPress or a pre-made portfolio theme could have saved my weekend. However, my goal wasn't just to make a "CV website," but to develop a performance and architecture-oriented project from the ground up. That's why I chose the most powerful tools of the modern web: **Next.js (App Router), TypeScript, and Tailwind CSS v4.**

### 1. Dark Mode and Semantic Color Architecture
By leveraging the power of Tailwind v4, I defined semantic color variables inside \`globals.css\`. This way, when the theme changes, only the root CSS variables change, instead of updating hundreds of classes in the HTML. The result: Zero flicker and massive performance.

### 2. Dynamic and Developer-Friendly Blog System
I designed a Markdown-based system. Using Next.js's dynamic routing, I built an engine that compiles my Markdown content at runtime, providing a medium-quality typography effortlessly.

### The Biggest Lesson: "Git Disaster" and The Time Machine
One of the most unforgettable moments was almost sending a week's worth of hard work into the void with a wrong \`git reset --hard\` command. Fortunately, by using Git's "Time Machine", the \`git reflog\` command, I managed to recover the deleted codes.
    `
  },
  // 2. NEW POST: AGGOA Algorithm
  {
    slug: "aggoa-algorithm-logic",
    title: "AGGOA Algorithm: A New Approach in Optimization",
    excerpt: "Understanding the mathematical foundations and advantages of the AGGOA algorithm in optimization problems.",
    date: "Feb 19, 2026",
    readTime: "6 min read",
    category: "Mathematics & Algorithms",
    content: `
Optimization problems are one of the fundamental fields of mathematical engineering. In this article, we will examine the mathematical foundations and the algorithmic logic behind the AGGOA algorithm.

### Core Logic of the Algorithm
(Note: You can add your detailed notes, mathematical formulas, and the reasons why AGGOA is preferred over other optimization methods here.)
    `
  },
  // 3. OLD POST: Gradient Descent
  {
    slug: "gradient-descent-optimization",
    title: "Gradient Descent: Navigating the Loss Landscape",
    excerpt: "A deep dive into the mathematics behind how artificial intelligence models learn.",
    date: "Feb 18, 2026",
    readTime: "5 min read",
    category: "Mathematics & Algorithms",
    content: `
### Why Do We Use Derivatives?
If we know the slope of our current position, we can figure out which way to go downhill. That is exactly what a **Gradient** is.

* **Learning Rate:** The size of the steps we take.
* **Epoch:** One complete pass of the training dataset through the algorithm.

> "Optimization is where mathematics shakes hands with computer science."
    `
  }
];
