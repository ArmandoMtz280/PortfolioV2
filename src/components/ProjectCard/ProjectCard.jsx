import "./ProjectCard.css"
import { NavLink } from "react-router-dom";

export default function ProjectCard ({ imgSrc, title, text, view  }) {
    return(
        <div className="project-card">
            <img src={imgSrc} alt="img" />
            <h2 className="project-title">{title}</h2>
            <div className="pro-details">
                <p>{text}</p>
                <div className="pro-btns">
                     <NavLink to={view} className="btn">Ver</NavLink>
                </div>
            </div>
        </div>
    );
};