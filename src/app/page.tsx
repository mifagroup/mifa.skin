"use client";

import { useRef } from "react";
import {
  AboutMifa,
  BestProjects,
  Blogs,
  ContactUs,
  Footer,
  Hero,
  OurBeginning,
  OurServices,
  ScrollIndicator,
} from "./components";
import { useFullPageScroll } from "./hooks/useFullPageScroll";

export default function Home() {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  
  const {
    containerRef,
    currentSection,
    isAnimating,
    setSectionRef,
    scrollToSection,
  } = useFullPageScroll({
    sectionsCount: 8, // Total number of sections
    animationDuration: 800,
  });

  return (
    <div ref={containerRef} className="full-page-container">
      {/* Scroll Indicator */}
      <ScrollIndicator
        currentSection={currentSection}
        sectionsCount={8}
        onSectionClick={scrollToSection}
      />
      
      <div ref={setSectionRef(0)} className="full-page-section">
        <Hero sectionRef={sectionRefs[0]} />
      </div>
      <div ref={setSectionRef(1)} className="full-page-section">
        <AboutMifa sectionRef={sectionRefs[1]} />
      </div>
      <div ref={setSectionRef(2)} className="full-page-section">
        <BestProjects />
      </div>
      <div ref={setSectionRef(3)} className="full-page-section">
        <OurServices />
      </div>
      <div ref={setSectionRef(4)} className="full-page-section">
        <OurBeginning />
      </div>
      <div ref={setSectionRef(5)} className="full-page-section">
        <ContactUs sectionRef={sectionRefs[2]} />
      </div>
      <div ref={setSectionRef(6)} className="full-page-section">
        <Blogs />
      </div>
      <div ref={setSectionRef(7)} className="full-page-section">
        <Footer />
      </div>
    </div>
  );
}
