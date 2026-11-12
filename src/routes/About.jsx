import "../index.css"
import Navbar from "../components/Navbar/Navbar";
import HeroImg from "../components/HeroImg/HeroImg";
import Footer from "../components/Footer/Footer";

export default function About () {
   return(
      <>
        <Navbar />
        <HeroImg />
        <div>About</div>
        <Footer />
      </>
   );
};