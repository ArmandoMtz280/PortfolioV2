import "../index.css"
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import ProjectsContainer from "../components/ProjectsContainer/ProjectsContainer";

export default function Projects () {
   return(
      <>
         <Navbar />
         <HeroSection heading="Proyectos" text="mis proyectos mas recientes" />
         <ProjectsContainer />
         <Footer />
      </>
   );
};