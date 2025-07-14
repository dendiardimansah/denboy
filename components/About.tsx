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
  Hello! I'm <strong>Dendi Ardimansah</strong>, a Network Engineer from <strong>Pangrumasan Village, Garut</strong>. I have a strong passion for technology—especially in the field of networking and developing <strong>IoT (Internet of Things)</strong> projects that bring real benefits to rural communities.
</p>
<p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
  Beyond the technical work, I also share journals and reflections on <strong>technology, Sundanese culture, music, and village potential</strong>. For me, technology is not just about machines and cables—it's about how we can embrace progress while preserving local wisdom and values.
</p>
<a href="#contact" className="font-semibold text-primary dark:text-primary-dark hover:underline text-lg">
  Through my projects and writing, I aim to bridge the gap between <strong>technological advancement and local wisdom</strong>. Let’s collaborate and build a smart, self-reliant, and culturally rich village future. &rarr;
</a>

        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;