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
      <div className="columns-1 md:columns-2 gap-8 space-y-8">
      {projects.map((project) => (
        <div key={project.id} className="break-inside-avoid">
        < ProjectCard {...project} />
        </div>
        ))}
      </div>

    </section>
  );
}
