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

// 2. Mock Data: We will work with this data for now.
export const projects: Project[] = [
  {
    id: 1,
    title: "Gradient Descent Visualizer",
    description: "Real-time visualization of mathematical optimization algorithms (SGD, Adam, RMSprop) on 3D surfaces.",
    techStack: ["Python", "Three.js", "React", "NumPy"],
    link: "https://github.com/erenhasankasap",
    generalPurpose: "To provide an intuitive and interactive way for students and researchers to visualize how different optimization algorithms navigate complex loss landscapes.",
    myRole: "Developed the core visualization engine using Three.js and implemented the mathematical logic for various gradient descent variants in Python.",
  },
  {
    id: 2,
    title: "Traffic Flow Simulation",
    description: "A simulation that models urban traffic density using Poisson distribution and optimizes traffic light durations.",
    techStack: ["C++", "Qt", "Statistical Analysis"],
    link: "#",
    generalPurpose: "To analyze and optimize urban traffic patterns to reduce congestion and improve travel times in high-density areas.",
    myRole: "Designed the traffic flow algorithms using Poisson distribution and built the user interface with the Qt framework.",
  },
  {
    id: 3,
    title: "Personal Portfolio V2",
    description: "A high-performance personal website developed with modern web technologies and minimalist design principles.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "#",
    generalPurpose: "To showcase my professional experience, projects, and skills in a modern, clean, and highly performant web application.",
    myRole: "Full-stack development, UI/UX design, and deployment of the entire portfolio website.",
  }
];
