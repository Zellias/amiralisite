"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Working with AmirAli was a game-changer. His attention to detail and creative vision transformed our project.",
    name: "Jane Doe",
    title: "CEO, Innovate Inc.",
  },
  {
    quote: "An exceptional developer with a keen eye for design. AmirAli consistently delivers high-quality, polished work.",
    name: "John Smith",
    title: "Lead Engineer, Tech Solutions",
  },
  {
    quote: "The best of both worlds: a talented designer who can also write clean, efficient code. Highly recommended.",
    name: "Emily White",
    title: "Product Manager, Creative Co.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16">
          What Others Say
        </h2>
        <div className="relative h-48 bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-2xl p-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-8"
            >
              <p className="text-xl md:text-2xl text-neutral-300 mb-6">
                "{testimonials[index].quote}"
              </p>
              <p className="text-lg font-semibold text-white">
                {testimonials[index].name}
              </p>
              <p className="text-neutral-400">
                {testimonials[index].title}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
            <button onClick={prevTestimonial} className="p-2 rounded-full bg-neutral-800/70 hover:bg-neutral-700 transition-colors">
                <ChevronLeft size={24} />
            </button>
            <button onClick={nextTestimonial} className="p-2 rounded-full bg-neutral-800/70 hover:bg-neutral-700 transition-colors">
                <ChevronRight size={24} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 