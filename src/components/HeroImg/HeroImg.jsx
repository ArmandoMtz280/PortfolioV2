import "./HeroImg.css"
import Introimg from "../../assets/img2.jpg"
import { Link } from "react-router-dom";

export default function HeroImg () {
   return(
       <div className="hero">
          <div className="mask">
            <img className="into-img" src={Introimg} alt="Hero" />
          </div>
          <div className="content">
            <p>HI, IM A FREELANCER</p>
            <h1>React Developer</h1>
            <div>
                <Link to={"/projects"} className="btn">
                  Projects
                </Link>
                <Link to={"/contact"} className="btn btn-light">
                  Contact
                </Link>
            </div>
          </div>
       </div>
   );
};