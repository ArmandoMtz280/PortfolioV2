import "./Footer.css"
import { FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Footer () {
   return(
      <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="whats">
                    <FaWhatsapp size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <p>56 4835 9640</p>
                </div>
                <div className="phone">
                    <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <p>56 3270 8191</p>
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <p>martinezfloresarmando280@gmail.com</p>
                </div>
            </div>
            <div className="right">
                <h4>About this Project</h4>
                <p>This portfolio was creating in Reacts.js</p>
            </div>
        </div>
      </div>
   );
};