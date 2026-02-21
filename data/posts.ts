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
    slug: "building-real-product-nextjs",
    title: "The Difference Between 'Can' and 'Do': Engineering My Portfolio",
    excerpt: "In an era where AI can generate software in seconds, building a real-life production environment from scratch matters more than ever.",
    date: "Feb 20, 2026",
    readTime: "4 min read",
    category: "Software Architecture",
    content: `
I started building this website not just to have a personal portfolio, but with a much bigger goal in mind: to engineer a "real" product from scratch. 

These days, almost anyone can build a website or generate a software product using AI. But there is a massive gap between theory and execution. The notions of *"I can do it"* and *"I actually did it"* are entirely different. I engineered this website to prove to myself and others that I can handle the complexities of a real-life production environment.

### The Tech Stack: Next.js, Tailwind CSS, and TypeScript
To bring this project to life, I chose a modern and robust stack. But why these specific technologies? As an engineer, my goal is to use software as a tool to solve problems, not to get bogged down by them.

Here are the core reasons behind my architectural choices:

* **Mastering the Next.js Architecture:** This was perhaps the most important reason. I wanted to deeply understand how modern web routing works, how to manage components, and how to build a scalable architecture that goes beyond traditional React.
* **Escaping CSS Complexity and HTML Insufficiency:** Plain HTML is often insufficient for dynamic real-world applications, and traditional CSS can quickly turn into a complex, unmaintainable mess. Tailwind CSS allowed me to style components directly and systematically, keeping the codebase clean.
* **Streamlined Feature Implementation:** Using TypeScript provided the strict type safety I needed to catch errors during development rather than in production, making it much easier and faster to implement new features with confidence.

### The Engineering Mindset
Building this portfolio reinforced my core philosophy: Software development and mathematics are not the end goals. They are simply the most powerful tools we have to optimize systems and engineer real-world solutions. 

Anyone *can* build a site with a prompt. But figuring out the architecture, managing the deployment, and building a system that you fully control—that is what makes you a deep-learner.
    `
  },

  {
    slug: "aggoa-hybrid-optimization",
    title: "AGGOA: Engineering a Hybrid Optimization Algorithm for Deep Learning",
    excerpt: "Balancing the rapid convergence of NAG with the stability of SGD to engineer a dynamic, hybrid optimization algorithm.",
    date: "Feb 20, 2026",
    readTime: "6 min read",
    category: "Mathematics & Algorithms",
    content: `
The success of modern machine learning models relies heavily on how efficiently we can optimize complex, multi-parameter loss functions. While Deep Learning is the leading architecture today, the true engineering challenge lies in the optimization algorithms used to train them. 

In my TÜBİTAK-2209A research project, I focused on two fundamental optimization methods: **Stochastic Gradient Descent (SGD)** and **Nesterov Accelerated Gradient (NAG)**. 

![Optimization Landscape](/loss-landscape.jpg)
*(Note: Visualizing the complex topology of a loss function where algorithms must navigate to find the global minimum.)*

### The Core Problem: Speed vs. Stability
* **Stochastic Gradient Descent (SGD):** SGD provides a highly stable and reliable learning process by updating parameters in the direction of the negative gradient: $\\theta_{t+1}=\\theta_{t}-\\eta\\nabla J(\\theta_{t})$. However, its convergence speed towards the optimal minimum is notoriously slow.
* **Nesterov Accelerated Gradient (NAG):** NAG offers a much faster convergence rate by utilizing a momentum mechanism that predicts future positions:    
 $v_{t}=\\gamma v_{t-1}+\\eta\\nabla J(\\theta_{t}-\\gamma v_{t-1})$. However, in Mini-Batch environments, this momentum amplifies data noise, leading to extreme instability, oscillations, and sometimes even divergence from the optimal point.

![SGD vs NAG Comparison](/sgd-vs-nag-graph.jpg)
*(Note: A comparison of SGD's steady but slow descent versus NAG's rapid but oscillatory behavior in a noisy environment.)*

### The Solution: AGGOA
To solve this, I engineered a hybrid mathematical model: the **Adaptive Transition Gradient Optimization Algorithm (AGGOA)**. 

The main philosophy of AGGOA is to dynamically bridge these two methods. It introduces a dynamic transition coefficient ($S_t$) that measures the cost oscillation (instability) during training. Under optimal conditions, AGGOA utilizes the speed of NAG. But the moment it detects high data noise and instability, it dynamically switches to the stable descent of SGD.


By balancing speed and stability, AGGOA aims to provide a more optimal and reliable training environment for deep learning models, proving that mathematical engineering can directly optimize artificial intelligence.
    `
  },
{
    slug: "circle-panic-docker-containerization",
    title: "Containerization and Operational Standards: Engineering with Docker",
    excerpt: "While anyone can generate code, true engineering lies in transforming it into a scalable, secure, and production-ready system. Here is how Docker solved our operational costs.",
    date: "Feb 21, 2026",
    readTime: "5 min read",
    category: "System Architecture",
    content: `
### The Cost of "It Works on My Machine"

One of the largest operational expenses when bringing a software project to life is the inconsistency of development environments. While designing our real-time multiplayer game, *Circle Panic*, we ran a "Shadow Company" simulation in the background. If we were to onboard 5 new developers to this project tomorrow, it would take days for each of them to install Go compilers, network tools, and dependencies on their local machines. For a startup, this directly translates to lost time and a significant Operational Expenditure (OpEx) loss.

This is exactly where Docker and containerization technology step in—not just as a software utility, but as an engineering tool to manage a company's operational efficiency.

### What is Containerization? (An Engineering Perspective)

Traditional Virtual Machines (VMs) create massive resource waste by copying hardware and an entire operating system from top to bottom. Docker, on the other hand, shares the host's operating system kernel, isolating your application within a "container" that holds only the most essential libraries required to run.

This architectural approach ensures the system consumes only the necessary resources. We designed our custom UDP game server to boot up in seconds within a highly lightweight Alpine Linux image, completely isolated and secure from the outside world.

### Server Architecture and Docker Compose

In a system requiring network programming and high concurrency, booting up the server was only one dimension of the job. We engineered the architecture based on the following principles:

* **Standardization via Dockerfile:** Our Golang backend was compiled using a multi-stage Dockerfile. During the build stage, the source code is translated into machine code. In the runtime stage, the source code and unnecessary tools are discarded, keeping only the final executable binary. This not only makes the server image incredibly lightweight but also drastically minimizes the attack surface from a cybersecurity standpoint.
* **Orchestration with Docker Compose:** We utilized \`docker-compose.yml\` so the client, server, and future database structures could communicate within the same virtual network. This single file became our company's "Infrastructure Blueprint." With just one terminal command, the entire ecosystem boots up synchronously.

### Real-Life Execution: The "Do" Phase

Many developers consider a project "finished" the moment they see the code running on their local machine. However, when solving engineering problems, the code itself is merely a tool, not the end goal. The primary reason we integrated Docker into the *Circle Panic* process was not to practice coding, but to acquire the discipline of turning code into a production-ready product.

Through this project simulation, we proved that a well-designed Docker infrastructure provides:
1. **Budget Optimization:** Keeping server hosting costs (AWS, DigitalOcean, etc.) at micro-levels.
2. **Zero Onboarding Time:** In a team management scenario, instead of reading 10-page setup documents, a new developer just runs \`docker-compose up\`.
3. **Deterministic Architecture:** Making the software architecture mathematically precise and independent of external factors.

Ultimately, when designing digital products, moving beyond lines of code to understand the big picture and system engineering is the only factor that ensures a project's survival in the real world.
    `
  },
];
