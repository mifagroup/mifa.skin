"use client";
import { useTheme } from "@mui/material";
import React from "react";

interface ScrollIndicatorProps {
  currentSection: number;
  sectionsCount: number;
  onSectionClick: (index: number) => void;
  sectionNames?: string[];
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  currentSection,
  sectionsCount,
  onSectionClick,
  sectionNames = [],
}) => {
  const theme = useTheme();

  const defaultSectionNames = [
    "صفحه اصلی", // Hero
    "درباره میفا", // AboutMifa
    "بهترین پروژه‌ها", // BestProjects
    "خدمات", // OurServices
    "شروع ما", // OurBeginning
    "تماس با ما", // ContactUs
    "مقالات", // Blogs
    "پایان", // Footer
  ];

  const names = sectionNames.length ? sectionNames : defaultSectionNames;

  return (
    <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center">
      {/* Loop indicator - top arrow */}
      <div
        className={`mb-2 w-4 h-4 flex items-center justify-center opacity-60 ${
          theme.palette.mode === "dark" ? "text-white" : "text-primary"
        }`}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </div>

      {/* Section dots */}
      <div className="flex flex-col gap-3">
        {Array.from({ length: sectionsCount }, (_, index) => (
          <div
            key={index}
            className="group relative flex items-center cursor-pointer"
            onClick={() => onSectionClick(index)}
          >
            {/* Section dot */}
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                currentSection === index
                  ? theme.palette.mode === "dark"
                    ? "bg-white border-white scale-125"
                    : "bg-primary border-primary scale-125"
                  : theme.palette.mode === "dark"
                  ? "bg-transparent border-white/50 hover:border-white hover:scale-110"
                  : "bg-transparent border-primary/50 hover:border-primary hover:scale-110"
              }`}
            />
            
            {/* Section name tooltip */}
            <div
              className={`absolute right-6 px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 ${
                theme.palette.mode === "dark"
                  ? "bg-white text-black"
                  : "bg-primary text-white"
              }`}
            >
              {names[index]}
            </div>
          </div>
        ))}
      </div>

      {/* Loop indicator - bottom arrow */}
      <div
        className={`mt-2 w-4 h-4 flex items-center justify-center opacity-60 ${
          theme.palette.mode === "dark" ? "text-white" : "text-primary"
        }`}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>

      {/* Loop text indicator */}
      <div
        className={`mt-1 text-xs opacity-50 ${
          theme.palette.mode === "dark" ? "text-white" : "text-primary"
        }`}
      >
        ∞
      </div>
    </div>
  );
};

export default ScrollIndicator; 