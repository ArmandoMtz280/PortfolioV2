import { Link } from "react-router-dom";
import img1 from "../../assets/img2.jpg"
import img2 from "../../assets/img3.jpg"
import "./AboutContent.css"

export default function AboutContent () {
    return(
        <div className="about">
           <div className="left">
              <h1>Who am I?</h1>
              <p>
                Im a react front-end developer. I create
                responsive secure web sites for my clients
              </p>
              <Link to="/contact" className="btn">Contacto</Link>
           </div>

           <div className="right">
              <div className="img-container">
                <div className="img-stack top">
                    <img src={img1} alt="img" className="img"/>
                </div>
                <div className="img-stack bottom">
                    <img src={img2} alt="img" className="img"/>
                </div>
              </div>
           </div>
        </div>
    );
};