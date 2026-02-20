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
  {
    slug: "gradient-descent-optimizasyonu",
    title: "Gradient Descent: Descending to the Bottom of the Loss Function",
    excerpt: "An in-depth look at the mathematics behind how artificial intelligence models learn.",
    date: "February 18, 2026",
    readTime: "5 min read",
    category: "Mathematics & Algorithm",
    content: `
### Why Do We Use Derivatives?
If we know the slope at our current position, we can determine where we need to go downhill. This is exactly what **Gradient** is.


* **Learning Rate:** The magnitude of the steps we take.
* **Epoch:** One complete pass of the entire dataset through the algorithm.



> "Optimization is where mathematics and computer science shake hands."
    `
  },
  {
    slug: "docker-ile-sistem-izolasyonu",
    title: "Isolating Development Environment Using Docker",
    excerpt: "How do we rescue our projects from the 'but it worked on my machine' problem when getting started with systems programming?",
    date: "February 10, 2026",
    readTime: "4 min read",
    category: "Systems Programming",
    content: `### Why is Docker Important?
In line with my systems programming goal, Docker is a great tool for ensuring applications run the same way on every operating system.

I will soon add my notes on network programming through Beej's Guide and Docker network settings here.
    `
  },
  {
    slug: "nextjs-tailwind-mimarisi",
    title: "Modern Portfolio Architecture: Next.js and Tailwind v4",
    excerpt: "Building a website with Dark Mode support by separating Server and Client components.",
    date: "February 1, 2026",
    readTime: "7 min read",
    category: "Web Development",
    content: `
As a software developer, writing good code is not enough; how you present that code, projects, and vision is equally important. I decided to build a modern, fast, and entirely personal digital laboratory that reflects the analytical mindset from my Mathematical Engineering education and my passion for systems programming.

In this article, I will explain step by step how I designed this personal website you are currently reading from scratch and what architectural decisions I made.

### Why Didn't I Use a Ready-Made Template?
Using WordPress or a ready-made portfolio theme could have saved my weekend. However, my goal was not just to create a "CV site," but to develop a project focused on performance and architecture from top to bottom. That's why I chose the most powerful tools of modern web: **Next.js (App Router), TypeScript, and Tailwind CSS v4.**

### 1. Dark Mode and Semantic Color Architecture
Adding dark mode to websites is generally thought to be just about writing dark:bg-black on every element. However, in this project, I followed a more engineering approach: **Design Tokens.**

Using the power of Tailwind v4, I defined semantic color variables in globals.css:
* I used --surface instead of bg-white.
* I used --primary instead of text-black.

Thus, when the theme changes with the next-themes library, instead of changing hundreds of classes in the HTML, only the color of 5-6 variables in the CSS root changes. Result: Zero flicker and tremendous performance.

### 2. Dynamic and Developer-Friendly Blog System
When creating this blog page, I didn't want to set up a cumbersome database or Headless CMS. I designed a **Markdown**-based system befitting an engineer.

Using Next.js's dynamic routing ([slug]) structure, I built an engine that compiles the .md (Markdown) content I write at runtime. Thanks to react-markdown and @tailwindcss/typography plugins, my code blocks, lists, and headings automatically achieved Medium.com-quality typography.

### 3. User Experience (UX) and Hick's Law
During the design phase, I considered not only the code but also the visitor's psychology.
* **Hick's Law:** I reduced the button clutter on the homepage. I offered the visitor only two clear options (Projects or CV).
* **Progressive Disclosure:** Instead of piling all blogs on the homepage, I showed only the latest 3 posts as a "preview" and directed curious visitors to this page.
* **GitHub Heat Map:** I didn't just list projects; I integrated my daily coding habits (commit history) in the open-source world live on the "Projects" page with react-github-calendar.

### The Biggest Lesson: "Git Disaster" and Time Machine
One of the most memorable moments I experienced while developing the project was when I almost sent weeks of effort into outer space with an incorrect git reset --hard command. Fortunately, using git reflog, Git's "Time Machine," I found the deleted commit hash and saved the project from the edge of the cliff. This once again proved to me that version control systems exist not only to store code but also to save lives.

### What's Next?
This site will never be a "finished" project for me. I plan to add my notes on Docker, network programming (Beej's Guide), and optimization algorithms like Gradient Descent, and even 3D simulations soon.

Welcome to my digital office!
    `
  }
];
