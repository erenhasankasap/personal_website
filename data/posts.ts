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

  // 2. NEW POST: AGGOA Algorithm
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
