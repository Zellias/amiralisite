"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        // Mobile: Vertical scrolling logic
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Determine current section based on scroll position
        const sectionIndex = Math.round(scrollY / windowHeight);
        setCurrentSection(Math.min(sectionIndex, 2)); // Max 2 for 3 sections
        setIsScrolled(scrollY > 50);
      } else {
        // Desktop: Horizontal scrolling logic
        const container = document.querySelector('main > div[style*="scroll-snap-type"]');
        if (container) {
          const scrollLeft = container.scrollLeft;
          const sectionWidth = container.clientWidth;
          const sectionIndex = Math.round(scrollLeft / sectionWidth);
          setCurrentSection(sectionIndex);
          setIsScrolled(scrollLeft > 50);
        }
      }
    };

    if (isMobile) {
      // Mobile: Listen to window scroll
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // Desktop: Listen to horizontal container scroll
      const container = document.querySelector('main > div[style*="scroll-snap-type"]');
      if (container) {
        container.addEventListener("scroll", handleScroll, { passive: true });
        return () => container.removeEventListener("scroll", handleScroll);
      }
    }
  }, [isMobile]);

  const scrollToSection = (sectionIndex) => {
    if (isMobile) {
      // Mobile: Vertical scrolling to specific sections
      const sectionIds = ['hero', 'about', 'contact'];
      const targetElement = document.getElementById(sectionIds[sectionIndex]);
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Desktop: Horizontal scrolling
      const container = document.querySelector('main > div[style*="scroll-snap-type"]');
      if (container) {
        const sectionWidth = container.clientWidth;
        container.scrollTo({
          left: sectionIndex * sectionWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollToTop = () => {
    if (isMobile) {
      // Mobile: Scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Desktop: Scroll to first section
      scrollToSection(0);
    }
  };

  const sections = [
    { label: "Home", index: 0 },
    { label: "About", index: 1 },
    { label: "Contact", index: 2 },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/30' 
          : 'bg-black/80 backdrop-blur-xl'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* macOS-style window header - only show on desktop */}
      {!isMobile && (
        <div className="h-12 flex items-center justify-between px-6 border-b border-gray-800/20">
          {/* Traffic Light Buttons */}
          <div className="flex items-center space-x-2">
            <motion.div 
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </div>

          {/* Center Title */}
          <motion.button
            onClick={scrollToTop}
            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            style={{
              fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
              fontWeight: 500,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AmirAli's Portfolio
          </motion.button>

          {/* Right side - Section indicator */}
          <div className="flex items-center space-x-1">
            {sections.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSection 
                    ? 'bg-white' 
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Navigation bar */}
      <nav className={`${isMobile ? 'h-16' : 'h-14'} flex items-center justify-between px-6`}>
        {/* Logo/Brand */}
        <motion.button
          onClick={scrollToTop}
          className="text-lg font-light text-white hover:text-gray-300 transition-colors"
          style={{
            fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
            fontWeight: 300,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Vupayrs
        </motion.button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {sections.map((section, index) => (
            <motion.button
              key={section.label}
              onClick={() => scrollToSection(section.index)}
              className={`transition-all duration-300 text-sm font-normal tracking-wide relative group ${
                index === currentSection 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              style={{
                fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                fontWeight: 400,
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {section.label}
              {/* Animated underline */}
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 bg-white"
                initial={{ width: 0 }}
                animate={{ 
                  width: index === currentSection ? '100%' : '0%'
                }}
                transition={{ 
                  duration: 0.3, 
                  ease: [0.25, 0.1, 0.25, 1] 
                }}
                whileHover={{ width: '100%' }}
              />
            </motion.button>
          ))}
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Mobile section dots */}
          <div className="flex items-center space-x-1">
            {sections.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSection 
                    ? 'bg-white scale-125' 
                    : 'bg-gray-600'
                }`}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>

        {/* Action Button */}
        <motion.a
          href="mailto:me@vupayrs.xyz"
          className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm font-medium transition-all duration-300 shadow-sm"
          style={{
            fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
            fontWeight: 500,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMobile ? 'Contact' : 'Hire Me'}
        </motion.a>
      </nav>
    </motion.header>
  );
};

export default Header; 