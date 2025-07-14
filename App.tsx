
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Journal from './components/Journal';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import JournalModal from './components/JournalModal';
import type { Project, Post } from './types';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Prevent scrolling when a modal is open
    const isModalOpen = selectedProject || selectedPost;
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject, selectedPost]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };
  
  const handlePostSelect = (post: Post) => {
    setSelectedPost(post);
  };

  const handleClosePostModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-500">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Projects onProjectSelect={handleProjectSelect} />
        <Journal onPostSelect={handlePostSelect} />
        <About />
        <Contact />
      </main>
      <Footer />
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseProjectModal} />
      )}
      {selectedPost && (
        <JournalModal post={selectedPost} onClose={handleClosePostModal} />
      )}
    </div>
  );
};

export default App;
