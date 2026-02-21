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
    title: "Circle Panic: Multiplayer Chaos & Shadow Company",
    description: "A chaotic, real-time multiplayer mobile party game where 8 players face off in a circular arena, racing to grab central balls to avoid elimination. The ultimate loser faces a penalty drawn from custom card pools (bar, family, or user-generated). While the surface is a highly engaging mobile game, the entire project was deliberately structured and executed as an end-to-end 'Shadow Company' simulation.",
    techStack: ["Golang", "Docker", "UDP Sockets", "System Architecture", "Tech Leadership"],
    status: "Processing",
    link: "https://github.com/erenhasankasap/Circle_Panic",
    generalPurpose: "To build a fully functional, high-performance multiplayer mobile game from scratch, handling the complex engineering challenge of synchronizing real-time data from 8 different players with millisecond latency. The core objective was to master custom UDP networking, complex algorithmic logic for collision and penalty pools, and backend containerization. Beyond the game itself, the purpose was to use this product as a real-world sandbox to simulate a tech startup—learning how to create rigorous business plans and understanding the life cycle of a product from a commercial perspective.",
    myRole: "System Architect & Simulated CTO. On the technical side, I engineered the custom UDP sockets for real-time synchronization, designed a server-authoritative backend to prevent client-side manipulation, and fully containerized the server environment using Docker for professional, isolated deployment. On the management side, I ran a meticulous operational simulation of a 'Shadow Company.' I calculated hypothetical employee salaries, estimated development timelines based on strict man-hours, and conducted rigorous cost-benefit analyses for infrastructure. For example, I mathematically weighed the financial impact of purchasing a commercial Firewall license versus paying developers' salaries to build an internal security solution.",
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
    description: "A comprehensive, cross-platform mobile application developed for both iOS and Android ecosystems. It focuses on delivering a native-like user experience with smooth animations, robust state management, and seamless backend communication.",
    techStack: ["React Native", "TypeScript", "Tailwind CSS", "RESTful APIs"],
    status: "Failed",
    link: "#",
    generalPurpose: "To tackle the complexities of mobile software development and cross-platform compatibility. The goal was to build a performant application that maintains a unified codebase while interacting efficiently with external RESTful APIs. It served as a deep dive into asynchronous data fetching, mobile UI/UX paradigms, and overcoming the architectural differences between mobile and web development environments.",
    myRole: "Lead Mobile Architect. I designed the component hierarchy and implemented the UI using React Native and NativeWind. I architected the data flow, handled complex asynchronous API calls, and ensured that the application state was efficiently managed to prevent memory leaks and unnecessary re-renders. I also focused on optimizing the mobile layouts to adapt fluidly across various screen sizes and device orientations, acknowledging the project's ultimate failure as a vital learning curve in scalability.",
  }
];
