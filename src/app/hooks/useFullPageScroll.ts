import { useCallback, useEffect, useRef, useState } from "react";

interface UseFullPageScrollProps {
  sectionsCount: number;
  animationDuration?: number;
}

export const useFullPageScroll = ({
  sectionsCount,
  animationDuration = 1000,
}: UseFullPageScrollProps) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= sectionsCount || isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSection(index);
    
    // Add scrolling class to container
    if (containerRef.current) {
      containerRef.current.classList.add('scrolling');
    }
    
    const targetSection = sectionsRef.current[index];
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
      if (containerRef.current) {
        containerRef.current.classList.remove('scrolling');
        containerRef.current.classList.remove('looping');
      }
    }, animationDuration);
  }, [sectionsCount, isAnimating, animationDuration]);

  const scrollToNext = useCallback(() => {
    if (currentSection < sectionsCount - 1) {
      scrollToSection(currentSection + 1);
    } else {
      // Loop back to first section
      if (containerRef.current) {
        containerRef.current.classList.add('looping');
      }
      scrollToSection(0);
    }
  }, [currentSection, sectionsCount, scrollToSection]);

  const scrollToPrevious = useCallback(() => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    } else {
      // Loop to last section
      if (containerRef.current) {
        containerRef.current.classList.add('looping');
      }
      scrollToSection(sectionsCount - 1);
    }
  }, [currentSection, sectionsCount, scrollToSection]);

  // Handle wheel events
  const handleWheel = useCallback((event: WheelEvent) => {
    event.preventDefault();
    
    if (isAnimating) return;

    const delta = event.deltaY;
    
    if (delta > 0) {
      // Scrolling down
      scrollToNext();
    } else {
      // Scrolling up
      scrollToPrevious();
    }
  }, [isAnimating, scrollToNext, scrollToPrevious]);

  // Handle keyboard events
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (isAnimating) return;

    switch (event.key) {
      case "ArrowDown":
      case "PageDown":
      case " ": // Space key
        event.preventDefault();
        scrollToNext();
        break;
      case "ArrowUp":
      case "PageUp":
        event.preventDefault();
        scrollToPrevious();
        break;
      case "Home":
        event.preventDefault();
        scrollToSection(0);
        break;
      case "End":
        event.preventDefault();
        scrollToSection(sectionsCount - 1);
        break;
    }
  }, [isAnimating, scrollToNext, scrollToPrevious, scrollToSection, sectionsCount]);

  // Handle touch events for mobile
  const touchStartY = useRef(0);
  const handleTouchStart = useCallback((event: TouchEvent) => {
    touchStartY.current = event.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((event: TouchEvent) => {
    if (isAnimating) return;

    const touchEndY = event.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;
    
    // Minimum distance for swipe detection
    if (Math.abs(deltaY) > 50) {
      if (deltaY > 0) {
        // Swiping up (scroll down)
        scrollToNext();
      } else {
        // Swiping down (scroll up)
        scrollToPrevious();
      }
    }
  }, [isAnimating, scrollToNext, scrollToPrevious]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add event listeners
    container.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("keydown", handleKeyDown);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      // Cleanup event listeners
      container.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeyDown);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleWheel, handleKeyDown, handleTouchStart, handleTouchEnd]);

  const setSectionRef = useCallback((index: number) => {
    return (element: HTMLDivElement | null) => {
      if (element) {
        sectionsRef.current[index] = element;
      }
    };
  }, []);

  return {
    containerRef,
    currentSection,
    isAnimating,
    scrollToSection,
    scrollToNext,
    scrollToPrevious,
    setSectionRef,
  };
}; 