import {
  AboutMifa,
  BestProjects,
  ContactUs,
  Footer,
  Header,
  Hero,
  OurBeginning,
  OurServices,
  RotatingText,
} from "./components";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMifa />
      <BestProjects />
      <OurServices />
      <OurBeginning />
      <ContactUs />
      <Footer />
    </div>
  );
}
