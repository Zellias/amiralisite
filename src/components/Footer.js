"use client";
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                <Github size={28} />
            </a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                <Linkedin size={28} />
            </a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                <Twitter size={28} />
            </a>
        </div>
        <p className="text-neutral-500">
            &copy; {new Date().getFullYear()} AmirAli. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 