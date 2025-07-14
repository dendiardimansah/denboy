import React, { useEffect, useRef } from 'react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && e.target === modalRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4 animate-fade-in"
      aria-labelledby="project-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-card-light dark:bg-card-dark w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden transform animate-scale-up">
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img src={project.detailImageUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto">
          <div className="flex-grow">
            <h2 id="project-title" className="text-3xl font-bold text-light-text dark:text-white mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map(tech => (
                <span key={tech} className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-dark text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{project.longDescription}</p>
          </div>
          <div className="flex-shrink-0 flex items-center gap-4 mt-4">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">View Live Demo</a>}
            {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 text-secondary dark:text-secondary-dark font-bold py-3 px-6 rounded-full border-2 border-secondary dark:border-secondary-dark transition-all duration-300">Source Code</a>}
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-light-text dark:text-dark-text bg-light-bg/50 dark:bg-dark-bg/50 hover:bg-light-bg dark:hover:bg-dark-bg transition-colors"
          aria-label="Close project details"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;