"use client";
import React from "react";
import Image from "next/image";

const technologies = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "GraphQL", icon: "/icons/graphql.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
  { name: "Framer Motion", icon: "/icons/framermotion.svg" },
  { name: "GSAP", icon: "/icons/gsap.svg" },
  { name: "Three.js", icon: "/icons/threejs.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
];

const WorkedWith = () => {
  const allIcons = [...technologies, ...technologies];

  return (
    <section className="py-12 bg-black">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-neutral-200">
          I've Worked With
        </h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee-icons">
          {allIcons.map((tech, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-4">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={64}
                height={64}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkedWith; 