
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { SunIcon, MoonIcon, PlantIcon } from './Icons';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-md' : ''}`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={handleNavClick} className="flex items-center space-x-2 text-2xl font-bold text-primary dark:text-primary-dark cursor-pointer">
            <PlantIcon className="w-8 h-8"/>
            <span>Dendi</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} onClick={handleNavClick} className="text-lg font-medium text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary-dark transition-colors cursor-pointer">
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center">
             <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-secondary dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
            </button>
            {/* Mobile menu button can be added here */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
