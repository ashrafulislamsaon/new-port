/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Clinic' | 'E-commerce' | 'Business' | 'Plugins' | 'Gutenberg';
  image: string;
  tags: string[];
  features: string[];
  specs: {
    speedBefore: number;
    speedAfter: number;
    customModules: number;
    gutenbergBlocks: number;
  };
  demoUrl?: string;
  year: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  description: string;
  longDesc: string;
  startingPrice: string;
  deliveryTime: string;
  features: string[];
  color: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  problem: string;
  solution: string;
  measurableResults: string[];
  performance: {
    mobileLoading: { before: string; after: string };
    desktopLoading: { before: string; after: string };
    seoScore: { before: number; after: number };
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
  duration: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string; // Markdown / structural content
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
  projectType: string;
}

export interface WorkflowStep {
  phase: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  icon: string;
}
