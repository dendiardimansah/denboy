import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="bg-gray-50 dark:bg-dark-bg/50">
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-2">
          <img src="/about-dendi.jpg" alt="Dendi Ardimansah at work" className="rounded-2xl shadow-2xl w-full" />
        </div>
        <div className="md:col-span-3">
          <h2 className="text-4xl font-bold text-light-text dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            I'm Dendi Ardimansah, a passionate developer and creator with a love for building things that bridge the digital and physical worlds. From a young age, I was fascinated by both nature's elegance and technology's power. This dual passion led me to the world of IoT.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            My work focuses on creating smart, sustainable, and user-friendly solutions. Whether it's a web app that optimizes energy use or a device that cares for plants, my goal is to use technology to enhance our connection with the environment, not detract from it.
          </p>
          <a href="#contact" className="font-semibold text-primary dark:text-primary-dark hover:underline text-lg">
            Let's build something together &rarr;
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;