/**
 * Projects Section Component
 * Purpose: Display project portfolio with 3D cards
 * Features: 3 cards in a row, responsive design, hover effects
 */

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/Components/UI/3d-card";

// Tech logo imports
import ReactLogo from "@/assets/icons/react.svg";
import NodeJSLogo from "@/assets/icons/nodejs.svg";
import MongoDBLogo from "@/assets/icons/mongodb.svg";
import VueLogo from "@/assets/icons/vue.svg";
import TypeScriptLogo from "@/assets/icons/typescript.svg";
import TailwindLogo from "@/assets/icons/Tailwind_CSS.svg";
import JavaScriptLogo from "@/assets/icons/javascript.svg";
import AngularLogo from "@/assets/icons/angular.svg";

// Technology logo mapping
const techLogos: Record<string, string> = {
  React: ReactLogo,
  "Node.js": NodeJSLogo,
  MongoDB: MongoDBLogo,
  Vue: VueLogo,
  "Vue.js": VueLogo,
  TypeScript: TypeScriptLogo,
  Tailwind: TailwindLogo,
  JavaScript: JavaScriptLogo,
  Angular: AngularLogo,
};

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Node.js", "MongoDB", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2339&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Vue.js", "TypeScript", "Tailwind", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AI-Powered Dashboard",
    description:
      "An intelligent analytics dashboard that leverages machine learning to provide actionable insights and predictive analytics.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Angular", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <CardContainer className="inter-var w-full max-w-sm mx-auto">
      <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-secondary/[0.3] border-white/[0.1] hover:border-secondary/[0.5] w-full h-auto rounded-xl p-6 border transition-all duration-500">
        {/* Project Title - Floats highest */}
        <CardItem
          translateZ="120"
          className="text-xl font-bold text-white mb-3 transition-all duration-300"
        >
          {project.title}
        </CardItem>

        {/* Project Description - Second level */}
        <CardItem
          as="p"
          translateZ="80"
          className="text-neutral-300 text-sm max-w-sm mb-4 leading-relaxed transition-all duration-300"
        >
          {project.description}
        </CardItem>

        {/* Project Image - Floats out dramatically */}
        <CardItem translateZ="150" className="w-full mb-4">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={project.image}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl transition-all duration-500 group-hover/card:scale-105 group-hover/card:shadow-2xl group-hover/card:shadow-secondary/[0.4]"
              alt={project.title}
            />
            {/* Image overlay for enhanced depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </div>
        </CardItem>

        {/* Technologies - Third level */}
        <CardItem translateZ="100" className="mb-6">
          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className="group relative flex items-center justify-center transition-all duration-300 hover:scale-125"
                title={tech}
              >
                {techLogos[tech] ? (
                  <img
                    src={techLogos[tech]}
                    alt={tech}
                    className="w-7 h-7 transition-all duration-300 group-hover:drop-shadow-lg filter brightness-100 hover:brightness-110"
                  />
                ) : (
                  <div className="w-7 h-7 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-white font-medium">
                      {tech.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </CardItem>

        {/* Action Buttons - Fourth level */}
        <div className="flex justify-center items-center">
          {project.liveUrl && (
            <CardItem
              translateZ={60}
              as="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-xl text-sm font-medium text-white border border-white/20 hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300"
            >
              Live Demo →
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 content-above-particles">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Explore our portfolio of innovative web applications and digital
            solutions that demonstrate our expertise in modern web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Removed Call to Action */}
      </div>
    </section>
  );
};

export default ProjectsSection;
