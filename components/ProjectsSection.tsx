import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      {/* Section Title */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Projects
        </h2>
        <p className="text-secondary text-lg ">
          Some software I have developed in line with my academic studies and personal interests.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

    </section>
  );
}
