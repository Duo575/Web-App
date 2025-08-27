// Global TypeScript definitions for the application

export interface BaseComponent {
  className?: string;
  children?: React.ReactNode;
}

export interface Framework {
  name: string;
  logo: string;
  category?: 'frontend' | 'backend' | 'database' | 'tool';
  color?: string;
  url?: string;
  visible: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  date: string;
  timeSlot: string;
  details: string;
  privacyAccepted: boolean;
}

export interface CountryCode {
  country: string;
  code: string;
  flag: string;
}

export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}