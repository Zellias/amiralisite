"use client";
import { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";

// Utility: allow passing zIndex as prop or array
const Section = ({ id, children, zIndex, ...props }) => (
  <div
    id={id}
    className="min-w-full h-screen flex-shrink-0"
    style={{
      scrollSnapAlign: "start",
      scrollSnapStop: "always",
      ...(Array.isArray(zIndex)
        ? { zIndex: zIndex[0] } // fallback to first if array
        : zIndex !== undefined
        ? { zIndex }
        : {}),
    }}
    {...props}
  >
    {children}
  </div>
);

export default function Home() {
  const scrollContainerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Horizontal scroll logic for desktop only
  useEffect(() => {
    if (isMobile) return; // Skip horizontal scroll logic on mobile

    const container = scrollContainerRef.current;
    if (!container) return;

    let touchStartX = 0;
    let touchStartY = 0;
    let isHorizontalSwipe = false;
    let scrollTimer = null;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isHorizontalSwipe = false;
    };

    const handleTouchMove = (e) => {
      if (!touchStartX || !touchStartY) return;

      const touchEndX = e.touches[0].clientX;
      const touchEndY = e.touches[0].clientY;
      const deltaX = Math.abs(touchEndX - touchStartX);
      const deltaY = Math.abs(touchEndY - touchStartY);

      // Determine if this is a horizontal swipe
      if (deltaX > deltaY && deltaX > 30) {
        isHorizontalSwipe = true;
        e.preventDefault(); // Prevent vertical scrolling
      }
    };

    const handleTouchEnd = (e) => {
      if (!touchStartX || !isHorizontalSwipe) {
        touchStartX = 0;
        touchStartY = 0;
        return;
      }

      const touchEndX = e.changedTouches[0].clientX;
      const deltaX = touchStartX - touchEndX;
      const sectionWidth = container.clientWidth;
      const currentScroll = container.scrollLeft;
      const currentSectionIndex = Math.round(currentScroll / sectionWidth);

      // Swipe threshold
      if (Math.abs(deltaX) > 50) {
        let targetSection = currentSectionIndex;

        if (deltaX > 0 && currentSectionIndex < 2) {
          // Swipe left - next section
          targetSection = currentSectionIndex + 1;
        } else if (deltaX < 0 && currentSectionIndex > 0) {
          // Swipe right - previous section
          targetSection = currentSectionIndex - 1;
        }

        container.scrollTo({
          left: targetSection * sectionWidth,
          behavior: "smooth",
        });
      }

      touchStartX = 0;
      touchStartY = 0;
      isHorizontalSwipe = false;
    };

    const handleScroll = () => {
      const sectionWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft;
      const newSection = Math.round(scrollLeft / sectionWidth);

      setCurrentSection(newSection);
    };

    const handleScrollEnd = () => {
      setIsScrolling(false);

      // Snap to nearest section
      const sectionWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft;
      const targetSection = Math.round(scrollLeft / sectionWidth);

      container.scrollTo({
        left: targetSection * sectionWidth,
        behavior: "smooth",
      });
    };

    const handleScrollWithDebounce = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(handleScrollEnd, 150);
      handleScroll();
    };

    // Add event listeners
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    container.addEventListener("scroll", handleScrollWithDebounce, { passive: true });

    return () => {
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("scroll", handleScrollWithDebounce);
    };
  }, [isMobile]);

  // Example z-indexes for each section (can be customized or passed as props)
  const sectionZIndexes = [
    [10, 20], // Hero: allow multiple z-indexes, e.g. for overlays
    [5],      // About
    [15, 30], // Contact: allow multiple z-indexes
  ];

  return (
    <main className="relative">
      <Header />

      {/* Conditional rendering: Vertical on mobile, Horizontal on desktop */}
      {isMobile ? (
        // Mobile: Vertical scrolling layout
        <div className="w-full">
          {/* Section 1: Hero */}
          <div id="hero" className="w-full min-h-screen" style={{ zIndex: sectionZIndexes[0][0] }}>
            <Hero />
          </div>

          {/* Section 2: About */}
          <div id="about" className="w-full min-h-screen" style={{ zIndex: sectionZIndexes[1][0] }}>
            <About />
          </div>

          {/* Section 3: Contact */}
          <div id="contact" className="w-full min-h-screen" style={{ zIndex: sectionZIndexes[2][0] }}>
            <ContactForm />
          </div>
        </div>
      ) : (
        // Desktop: Horizontal scrolling layout
        <>
          <div
            ref={scrollContainerRef}
            className="flex h-screen overflow-x-auto overflow-y-hidden scroll-smooth"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              touchAction: "pan-x",
            }}
          >
            {/* Hide scrollbar */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* Section 1: Hero */}
            <Section id="hero" zIndex={sectionZIndexes[0]}>
              <Hero />
            </Section>

            {/* Section 2: About */}
            <Section id="about" zIndex={sectionZIndexes[1]}>
              <About />
            </Section>

            {/* Section 3: Contact */}
            <Section id="contact" zIndex={sectionZIndexes[2]}>
              <ContactForm />
            </Section>
          </div>

          {/* Desktop horizontal scroll indicators */}
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSection
                      ? "bg-white scale-125"
                      : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop swipe hint */}
        </>
      )}
    </main>
  );
}
