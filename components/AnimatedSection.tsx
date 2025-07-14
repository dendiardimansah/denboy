import React, { useEffect, useRef, useState, type ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`py-16 sm:py-24 px-6 lg:px-8 transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default AnimatedSection;
