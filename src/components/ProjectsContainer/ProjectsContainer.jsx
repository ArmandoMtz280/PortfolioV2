import "../ProjectCard/ProjectCard.css"
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectCardData from "../../Data/data";

export default function ProjectsContainer () {
    return(
        <div className="work-container">
            <h1 className="projects-heading">Proyectos</h1>
            <div className="projects-container">
               {
                 ProjectCardData.map((val, i) => (
                    
                        <ProjectCard 
                          key={i}
                          imgSrc={val.imgSrc}
                          title={val.title}
                          text={val.text}
                          view={val.view}
                        />
                    
                 ))
               }
            </div>
        </div>
    );
};