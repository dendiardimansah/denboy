import React from 'react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <AnimatedSection id="home" className="min-h-screen flex items-center justify-center !pt-0 !pb-0">
      <div className="text-center">
        <img
          src="/assets/profile.jpg"
          alt="Dendi Ardimansah"
          className="w-36 h-36 md:w-48 md:h-48 rounded-full mx-auto mb-6 border-4 border-primary/50 shadow-lg object-cover"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-light-text dark:text-white mb-3">
          Dendi Ardimansah
        </h1>
        <p className="text-xl md:text-2xl font-light text-primary dark:text-primary-dark mb-8">
          Connecting Nature and Technology
        </p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 text-secondary dark:text-secondary-dark font-bold py-3 px-8 rounded-full border-2 border-secondary dark:border-secondary-dark transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;