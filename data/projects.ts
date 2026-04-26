export type ProjectStatus = 'Completed' | 'Processing' | 'Failed';

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  status: ProjectStatus;
  link: string;
  github?: string;
  generalPurpose: string;
  myRole: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A high-performance, fully responsive personal engineering portfolio built from the ground up. It serves as a living testament to the 'Can vs. Do' philosophy—moving beyond AI-generated templates to architect a robust, production-ready web application that truly reflects a CTO-level mindset.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    status: "Completed",
    link: "https://github.com/erenhasankasap/personal_website",
    github: "https://github.com/erenhasankasap",
    generalPurpose: "To create a digital presence that reflects my engineering philosophy: using software as a tool to solve structural problems. Rather than using basic HTML/CSS or pre-built website builders, the goal was to master the modern Next.js App Router architecture. It aims to showcase not just my past projects, but my ability to design scalable component trees, manage complex dynamic routing for a markdown-based blog, and implement clean, maintainable styling systems.",
    myRole: "Full-stack Developer and UI/UX Architect. I engineered the entire frontend architecture, ensuring strict type safety with TypeScript to catch errors during development. I implemented a dynamic markdown rendering system with full KaTeX/LaTeX support for mathematical formulas, optimized asset loading for maximum performance, and crafted a minimalist interface that prioritizes readability and seamless user experience.",
  },
  {
    id: 2,
    title: "Circle Panic: Party Game Market Research",
    description: "A product-management deep dive into the mobile party-game category, originally scoped as a multiplayer game build and deliberately pivoted into a competitive market analysis. The output: a teardown of five direct competitors, a perceptual map identifying an unoccupied 'offline + dynamic content' quadrant, and a 12-month cost model comparing a fully-staffed studio against a two-student bootstrap.",
    techStack: ["Market Research", "Competitive Analysis", "Financial Modeling", "Product Strategy", "Excel"],
    status: "Completed",
    link: "/projects/circle-panic",
    generalPurpose: "To answer a focused product question without writing a single line of game code: where does Circle Panic actually fit in the mobile party-game market, and what would it cost to build it at studio scale versus as a two-student team? The project treats the original game concept as a product hypothesis rather than an engineering target — using competitor teardowns, a perceptual map, and a bottoms-up cost model to test whether the gap is real and whether the unit economics work. The goal was to produce the kind of artifact a Product Manager would actually ship: opinionated, sourced, and decision-ready.",
    myRole: "Sole researcher and analyst. I built the competitive teardown of Heads Up!, Spaceteam, Truth or Dare, King of Booze, and Never Have I Ever — comparing core loops, monetization, virality, and weaknesses in a single comparable matrix. I designed and authored the two-axis perceptual map (online↔offline × static↔dynamic content) that visualizes the gap Circle Panic targets. I then built a 12-month bottoms-up cost model in Excel covering personnel, infrastructure, marketing, and overhead — generating a 539x cost ratio between the studio scenario and the bootstrap scenario. The deliverables: an Excel model, a perceptual map asset, and a teardown article — all positioned as a portfolio artifact for product-management roles.",
  },

  {
    id: 3,
    title: "TÜBİTAK 2209-A: AGGOA Algorithm",
    description: "An academic research and application project funded by the TÜBİTAK 2209-A program. It focuses on developing a novel, hybrid mathematical optimization algorithm (AGGOA) designed to dynamically balance speed and stability when training Deep Learning models.",
    techStack: ["Python", "PyTorch", "Mathematical Modeling", "Data Analysis"],
    status: "Processing",
    link: "#",
    generalPurpose: "The primary objective is to solve the critical trade-off between speed and stability in machine learning optimization. While Nesterov Accelerated Gradient (NAG) provides rapid convergence, its momentum mechanism causes severe instability and overshooting in high-noise mini-batch environments. Conversely, Stochastic Gradient Descent (SGD) is highly stable but notoriously slow. This project aims to mathematically formulate a dynamic transition rule that bridges these two methods, monitoring cost oscillation to optimize neural network training.",
    myRole: "Project Lead and Core Researcher. I formulated the theoretical mathematical foundation of the AGGOA algorithm, defining the dynamic transition coefficient based on gradient magnitude and cost oscillation. I then transitioned this theory into practice by prototyping the algorithm in Python using PyTorch, and conducting rigorous comparative experiments (AGGOA vs. Adam vs. NAG) on Convolutional Neural Networks (CNNs) using the CIFAR-10 dataset to quantitatively prove improvements in convergence speed and divergence mitigation.",
  },
{
    id: 4,
    title: "Cross-Platform Ecosystem & API Integration",
    description: "A comprehensive, cross-platform mobile application developed for both iOS and Android. Ultimately marked as 'Failed' due to a decrease in market demand and challenges in partner coordination, serving as a vital lesson in product-market fit.",
    techStack: ["React Native", "TypeScript", "Tailwind CSS", "RESTful APIs"],
    status: "Failed",
    link: "#",
    generalPurpose: "To build a performant mobile application that maintains a unified codebase while interacting efficiently with RESTful APIs. It served as a deep dive into asynchronous data fetching and mobile UI/UX paradigms. More importantly, the project's cancellation highlighted the non-technical realities of software engineering: the necessity of continuous stakeholder alignment and adapting to shifting market demands.",
    myRole: "Lead Mobile Architect. I designed the component hierarchy using React Native and NativeWind, handled complex API calls, and managed application state. Despite the technical achievements, the project was ultimately halted because the target audience demand decreased and the project partners could not maintain coordination—teaching me that engineering success requires both solid code and strong business alignment.",
  }
];
