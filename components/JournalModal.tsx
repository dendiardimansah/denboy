import React, { useEffect, useRef } from 'react';
import type { Post } from '../types';

interface JournalModalProps {
  post: Post;
  onClose: () => void;
}

const JournalModal: React.FC<JournalModalProps> = ({ post, onClose }) => {
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
      aria-labelledby="journal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-card-light dark:bg-card-dark w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden transform animate-scale-up">
        <div className="flex-shrink-0">
          <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover" />
        </div>
        <div className="flex-grow p-8 overflow-y-auto">
          <h2 id="journal-title" className="text-3xl font-bold text-light-text dark:text-white mb-4">{post.title}</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {post.fullContent}
          </p>
        </div>
         <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-light-text dark:text-dark-text bg-light-bg/50 dark:bg-dark-bg/50 hover:bg-light-bg dark:hover:bg-dark-bg transition-colors"
          aria-label="Close journal entry"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>
  );
};

export default JournalModal;