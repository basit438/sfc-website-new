import Image from "next/image";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import LogoMarquee from "./components/ui/LogoMarquee";
import ResultsSection from "./components/sections/ResultsSection";
import Footer from "./components/sections/footer";
import { Transform } from "stream";
import OurCapabilities from "@/app/components/sections/OurCapabilities";
import TransformSection from "./components/sections/TransformSection";
import ClientsMarque from "@/app/components/ui/ClientsMarque";

export default function Home() {
  return (
  <>
<Hero/>
<About/>
<LogoMarquee/>
<OurCapabilities/>
<ClientsMarque/>
<ResultsSection/>
<TransformSection/>
<Footer/>
  </>
  );
}

{/* <Hero/>
  <About/>
 <LogoMarquee/>
 <OurCapabilities/>
 <ClientsMarque/>
 <ResultsSection/>
 <TransformSection/>
 <Footer/> */}