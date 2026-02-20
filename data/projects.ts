// 1. Blueprint (Template): What properties SHOULD a project object have?
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
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
    link: "https://github.com/erenhasankasap",
    github: "https://github.com/erenhasankasap",
    generalPurpose: "To showcase my professional experience, projects, and skills in a modern, clean, and highly performant web application using the latest Next.js App Router.",
    myRole: "Full-stack development, UI/UX design, and deployment of the entire portfolio architecture.",
  },
  {
    id: 2,
    title: "TÜBİTAK 2209-A: Fast Gradient Descent",
    description: "A research and application project developed on Fast Gradient Descent optimization algorithms using a hybrid approach.",
    techStack: ["Python", "NumPy", "Matplotlib"],
    link: "#",
    generalPurpose: "To research and implement a highly efficient, hybrid mathematical model for optimization algorithms, improving upon standard Gradient Descent techniques.",
    myRole: "Lead researcher and developer; constructed the core mathematical models and implemented the optimization algorithms in Python.",
  },
  {
    id: 3,
    title: "Circle Panic",
    description: "A next-generation mobile game project developed for mobile platforms, strictly implementing containerization and security practices.",
    techStack: ["React Native", "Docker", "Algorithms"],
    link: "#",
    generalPurpose: "To create an engaging mobile gaming experience while applying modern backend architectures, algorithmic logic, and robust security protocols.",
    myRole: "Co-developer focusing on game mechanics, algorithmic logic, and system isolation using Docker.",
  },
  {
    id: 4,
    title: "Cross-Platform Mobile Application",
    description: "A UI/UX focused mobile application with RESTful API integration, developed using React Native and NativeWind.",
    techStack: ["React Native", "TypeScript", "Tailwind CSS"],
    link: "#",
    generalPurpose: "To build a performant, cross-platform mobile application utilizing a modern tech stack to ensure a seamless user experience on both iOS and Android.",
    myRole: "Developed the frontend architecture, integrated RESTful APIs, and designed the UI components.",
  }
];
