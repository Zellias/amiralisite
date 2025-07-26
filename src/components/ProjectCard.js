"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group bg-neutral-900/50 backdrop-blur-md rounded-2xl overflow-hidden border border-neutral-800"
    >
      <div className="relative w-full h-64">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-neutral-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-medium bg-neutral-800/70 text-neutral-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 