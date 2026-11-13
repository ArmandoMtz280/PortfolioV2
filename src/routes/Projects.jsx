import "../index.css"
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";

export default function Projects () {
   return(
      <>
         <Navbar />
         <HeroSection heading="Proyectos" text="mis proyectos mas recientes" />
         <Footer />
      </>
   );
};