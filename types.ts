
import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  Icon: React.FC<{ className?: string }>;
  detailImageUrl: string;
  longDescription: string;
  techStack: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  fullContent: string;
}

export interface NavLink {
  name: string;
  href: string;
}
