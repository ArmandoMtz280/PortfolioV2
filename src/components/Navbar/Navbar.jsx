import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"
import { useState } from "react";

export default function () {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
        <header className="header">
            <Link to="/"><h2>Portafolio</h2></Link>
            <nav className="nav">
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Sobre Mi</Link></li>
                    <li><Link to="/projects">Proyectos</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
                <div className="hamburguer" onClick={ handleClick }>
                  {
                    click ? (
                       <FaTimes size={20} style={{color: "#fff"}}/>
                    ) : (
                       <FaBars size={20} style={{color: "#fff"}}/>
                    )
                  }  
                  
                  
                </div>
            </nav>
        </header>
    );
}