// 1. Blueprint (Template): Proje objesinde neler OLMALI?
export type ProjectStatus = 'Completed' | 'Processing' | 'Failed';

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  status: ProjectStatus; // YENİ: Durum etiketi
  link: string;
  github?: string;
  generalPurpose: string;
  myRole: string;
}

// 2. Real Data: Eren Hasan Kasap's Projects
export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Architecture",
    description: "A high-performance personal website developed with modern web technologies and minimalist design principles.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    status: "Completed",
    link: "https://github.com/erenhasankasap/personal_website",
    github: "https://github.com/erenhasankasap",
    generalPurpose: "To showcase my professional experience, projects, and skills in a modern, clean, and highly performant web application using the latest Next.js App Router.",
    myRole: "Full-stack development, UI/UX design, and deployment of the entire portfolio architecture.",
  },
{
    id: 2,
    title: "Circle Panic: Multiplayer Chaos & Shadow Company",
    description: "A chaotic, real-time multiplayer mobile party game where 8 players face off in a circular arena, racing to grab central balls to avoid elimination. The ultimate loser faces a penalty drawn from custom card pools (bar, family, or user-generated). While the surface is a highly engaging mobile game, the entire project was deliberately structured and executed as an end-to-end 'Shadow Company' simulation.",
    techStack: ["Golang", "Docker", "UDP Sockets", "System Architecture", "Tech Leadership"],
    status: "Processing",
    link: "https://github.com/erenhasankasap/Circle_Panic",
    generalPurpose: "To build a fully functional, high-performance multiplayer mobile game from scratch, handling the complex engineering challenge of synchronizing real-time data from 8 different players with millisecond latency. The core objective was to master custom UDP networking, complex algorithmic logic for collision and penalty pools, and backend containerization. Beyond the game itself, the purpose was to use this product as a real-world sandbox to simulate a tech startup—learning how to create rigorous business plans and understanding the life cycle of a product from a commercial perspective.",
    myRole: "System Architect & Simulated CTO. On the technical side, I engineered the custom UDP sockets for real-time synchronization, designed a server-authoritative backend to prevent client-side manipulation, and fully containerized the server environment using Docker for professional, isolated deployment. On the management side, I ran a meticulous operational simulation of a 'Shadow Company.' I calculated hypothetical employee salaries, estimated development timelines based on strict man-hours, and conducted rigorous cost-benefit analyses for infrastructure. For example, I mathematically weighed the financial impact of purchasing a commercial Firewall license versus paying developers' salaries to build an internal security solution. This dual role allowed me to bridge the gap between writing code and actually leading a technical team while managing enterprise-level budgets.",
  },
  {
    id: 3,
    title: "TÜBİTAK 2209-A: AGGOA Algorithm",
    description: "Developing a hybrid optimization algorithm (AGGOA) that dynamically switches between Nesterov Accelerated Gradient and SGD to balance speed and stability in deep learning models.",
    techStack: ["Python", "PyTorch", "Mathematical Modeling"],
    status: "Processing",
    link: "#",
    generalPurpose: "To solve the instability of momentum-based algorithms in high-noise mini-batch environments by engineering a dynamic transition rule that optimizes neural network training.",
    myRole: "Project Lead & Researcher; formulated the theoretical mathematics of the AGGOA algorithm and prototyped it in Python using CNNs on the CIFAR-10 dataset.",
  },
  {
    id: 4,
    title: "Cross-Platform Mobile Application",
    description: "A UI/UX focused mobile application with RESTful API integration, developed using React Native and NativeWind.",
    techStack: ["React Native", "TypeScript", "Tailwind CSS"],
    status: "Failed",
    link: "#",
    generalPurpose: "To build a performant, cross-platform mobile application utilizing a modern tech stack to ensure a seamless user experience on both iOS and Android.",
    myRole: "Developed the frontend architecture, integrated RESTful APIs, and designed the UI components.",
  }
];
