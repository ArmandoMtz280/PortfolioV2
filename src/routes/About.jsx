import "../index.css"
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";

export default function About () {
   return(
      <>
        <Navbar />
        <HeroSection heading="Sobre mi" text="soy desarrollador web front"/>
        <Footer />
      </>
   );
};