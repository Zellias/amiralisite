"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import ScrollIndicator from "./ScrollIndicator";

// Massive starfield for full-screen coverage
const MinimalStars = ({ mouseX, mouseY }) => {
  const ref = useRef();

  // Increase star count and spread for full coverage
  const [particles] = useState(() => {
    const STAR_COUNT = 2000;
    const positions = new Float32Array(STAR_COUNT * 3);
    const sizes = new Float32Array(STAR_COUNT);

    for (let i = 0; i < STAR_COUNT; i++) {
      // Make the starfield radius much larger
      const radius = Math.random() * 60 + 40;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Bigger stars: 2.5 + 0.5 => 3.5 + 1.5, so 2.5..5.0
      sizes[i] = Math.random() * 2.5 + 2.5;
    }
    return { positions, sizes };
  });

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.0002;
      ref.current.rotation.y += 0.0003;
      const mouseInfluence = 0.00001;
      ref.current.rotation.x += mouseY * mouseInfluence;
      ref.current.rotation.y += mouseX * mouseInfluence;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particles.sizes.length}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.16} // was 0.08, now doubled for bigger stars
        color="#f8faff" // lighter than #ffffff
        sizeAttenuation
        transparent
        opacity={0.55} // was 0.35, now a bit lighter
      />
    </points>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef();

  // Vupayrs info
  const mainText = ["AmirAli"];
  const subText = "Crypto Trader";
  const location = "Shiraz, Iran";

  // Subtle mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 30, stiffness: 80 });
  const smoothMouseY = useSpring(mouseY, { damping: 30, stiffness: 80 });

  // Very subtle parallax
  const backgroundY = useTransform(smoothMouseY, [-0.5, 0.5], [2, -2]);
  const backgroundX = useTransform(smoothMouseX, [-0.5, 0.5], [2, -2]);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;

      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(x);
      mouseY.set(y);
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [mouseX, mouseY, isMobile]);

  const scrollToNext = () => {
    if (isMobile) {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      const container = document.querySelector('main > div[style*="scroll-snap-type"]');
      if (container) {
        const sectionWidth = container.clientWidth;
        container.scrollTo({
          left: sectionWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  // Make the Canvas always cover the full screen, and for mobile, move it to the top
  // --- FIX: Always use zIndex: 1 for the canvas, so it's always behind the text, even on mobile
  const canvasStyle = isMobile
    ? {
        position: "absolute",
        left: 0,
        top: 0,
        width: "100vw",
        height: "60vh",
        maxWidth: "100vw",
        maxHeight: "60vh",
        zIndex: 1, // was 2, now 1 to ensure it's behind text
        pointerEvents: "none",
        filter: "drop-shadow(0 2px 32px #000a)",
      }
    : {
        position: "absolute",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
      };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black"
      style={{
        touchAction: isMobile ? 'pan-y' : 'pan-x',
      }}
    >
      {/* 3D Background without iPhone */}
      <motion.div
        className="absolute inset-0"
        style={
          isMobile
            ? { ...canvasStyle }
            : { ...canvasStyle, x: backgroundX, y: backgroundY }
        }
      >
        <Canvas
          camera={{
            position: isMobile ? [0, 0, 0.45] : [0, 0, 0.2],
            fov: isMobile ? 60 : 40,
          }}
          style={canvasStyle}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 4, 2]} intensity={0.7} />
          <MinimalStars mouseX={smoothMouseX.get()} mouseY={smoothMouseY.get()} />
        </Canvas>
      </motion.div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" style={{ zIndex: 2 }} />

      {/* Main Content */}
      <div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto py-20 md:py-0"
        style={
          isMobile
            ? {
                marginTop: "calc(60vh - 40px)",
                // push content below phone on mobile
              }
            : {}
        }
      >
        {/* Main Name - Apple style */}
        <div className="mb-4">
          {mainText.map((word, wordIndex) => (
            <div key={wordIndex} className="block">
              <motion.h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[9rem] font-light tracking-tight text-white"
                style={{
                  fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                  fontWeight: 200,
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: wordIndex * 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.div
          className="mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light tracking-wide"
            style={{
              fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
              fontWeight: 300,
            }}
          >
            {subText}
          </p>
        </motion.div>

        {/* Location */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p
            className="text-base md:text-lg text-gray-500 font-light tracking-wide"
            style={{
              fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
              fontWeight: 300,
            }}
          >
            <img
              src="/pin.png"
              alt="Location pin"
              style={{ display: 'inline', width: '1em', height: '1em', verticalAlign: 'middle', marginRight: '0.4em' }}
            />
            {location}
          </p>
        </motion.div>

        {/* Apple-style CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => window.open('mailto:me@vupayrs.xyz')}
            className="px-6 md:px-8 py-3 bg-white text-black rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black touch-manipulation"
            style={{
              fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
              WebkitTapHighlightColor: 'transparent',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.button>

          <motion.button
            onClick={scrollToNext}
            className="px-6 md:px-8 py-3 border border-gray-600 text-white rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:border-gray-400 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-black touch-manipulation"
            style={{
              fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
              WebkitTapHighlightColor: 'transparent',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator - only show on desktop */}
      {!isMobile && (
        <motion.div
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ScrollIndicator />
        </motion.div>
      )}

      {/* Single minimal floating element */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-1 h-1 bg-white/30 rounded-full"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default Hero;