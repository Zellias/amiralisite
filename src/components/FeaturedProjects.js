"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project Alpha",
    description: "An innovative platform for creative professionals to showcase their work and connect with collaborators.",
    imageUrl: "/projects/project1.jpg",
    tags: ["Next.js", "GraphQL", "Three.js"],
  },
  {
    title: "Project Beta",
    description: "A cutting-edge e-commerce solution with a focus on user experience and performance.",
    imageUrl: "/projects/project2.jpg",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Project Gamma",
    description: "An open-source library for creating complex data visualizations with ease.",
    imageUrl: "/projects/project3.jpg",
    tags: ["TypeScript", "D3.js", "React"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-center mb-16">
          Featured Work
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 