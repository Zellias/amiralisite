"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ScrollIndicator = () => {
  const [isPressed, setIsPressed] = useState(false);

  const scrollNext = () => {
    const container = document.querySelector('main > div');
    if (container) {
      const sectionWidth = container.clientWidth;
      const currentScroll = container.scrollLeft;
      const nextSection = Math.floor(currentScroll / sectionWidth) + 1;
      
      if (nextSection < 3) { // Only if there's a next section
        container.scrollTo({
          left: nextSection * sectionWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
  <></>
  );
};

export default ScrollIndicator; 