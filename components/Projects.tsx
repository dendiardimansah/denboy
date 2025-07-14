import React from 'react';
import { PROJECTS } from '../constants';
import AnimatedSection from './AnimatedSection';
import type { Project } from '../types';

interface ProjectsProps {
  onProjectSelect: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  return (
    <AnimatedSection id="projects" className="bg-gray-50 dark:bg-dark-bg/50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-light-text dark:text-white">Featured IoT Projects</h2>
        <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">Innovations at the intersection of code and the physical world.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <button
            key={project.id}
            onClick={() => onProjectSelect(project)}
            className="bg-card-light dark:bg-card-dark rounded-xl shadow-lg p-8 text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/50 w-full"
          >
            <div className="flex justify-center items-center mb-6 pointer-events-none">
              <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-full">
                <project.Icon 
                  className={`w-16 h-16 text-primary dark:text-primary-dark 
                  ${project.title.includes('Garden') ? 'animate-sway' : ''}
                  ${project.title.includes('Monitor') ? 'animate-spin' : ''}`}
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-light-text dark:text-white pointer-events-none">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 pointer-events-none">{project.description}</p>
          </button>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;