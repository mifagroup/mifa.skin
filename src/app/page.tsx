import Image from "next/image";
import { AboutMifa, BestProjects, Header, Hero } from "./components";

const primaryDark = "#6a1b9a";
const primaryLight = "#4a148c";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMifa />
      <BestProjects />
    </div>
  );
}
