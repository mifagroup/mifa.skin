"use client";

import { useRef } from "react";
import {
  AboutMifa,
  BestProjects,
  ContactUs,
  Footer,
  Header,
  Hero,
  OurBeginning,
  OurServices,
} from "./components";

export default function Home() {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  return (
    <div>
      <Header sectionRefs={sectionRefs} />
      <Hero sectionRef={sectionRefs[0]} />
      <AboutMifa sectionRef={sectionRefs[1]} />
      <BestProjects />
      <OurServices />
      <OurBeginning />
      <ContactUs sectionRef={sectionRefs[2]} />
      <Footer />
    </div>
  );
}
