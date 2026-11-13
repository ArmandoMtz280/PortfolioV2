import "../index.css"
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";

export default function Contact () {
    return(
        <>
            <Navbar />
            <HeroSection heading="Contacto" text="contactame"/>
            <Footer />
        </>
    );
};