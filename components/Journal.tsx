
import React from 'react';
import { POSTS } from '../constants';
import AnimatedSection from './AnimatedSection';
import type { Post } from '../types';

interface JournalProps {
  onPostSelect: (post: Post) => void;
}

const Journal: React.FC<JournalProps> = ({ onPostSelect }) => {
  return (
    <AnimatedSection id="journal">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-light-text dark:text-white">Latest from the Journal</h2>
        <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">Thoughts on technology, sustainability, and creative development.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {POSTS.map((post) => (
          <div key={post.id} className="bg-card-light dark:bg-card-dark rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-light-text dark:text-white">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
              <button
                onClick={() => onPostSelect(post)}
                className="self-start font-semibold text-primary dark:text-primary-dark hover:underline"
              >
                Read More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Journal;
