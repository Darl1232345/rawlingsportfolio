// Type definitions for the project
import type { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  icon: ReactNode;
  tags: string[];
  color: string;
  bgColor: string;
  status: 'Live' | 'Beta' | 'Development';
  year: string;
  liveDemo?: string;
  github?: string;
}