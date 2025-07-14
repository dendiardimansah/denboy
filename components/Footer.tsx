
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-dark-bg/70">
      <div className="max-w-7xl mx-auto py-8 px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Dendi Ardimansah. All Rights Reserved.</p>
        <p className="mt-1">Designed with a focus on sustainability and performance.</p>
      </div>
    </footer>
  );
};

export default Footer;
