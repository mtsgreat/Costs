import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import Container from "../layout/Container";
import Loading from '../layout/Loading'
import LinkButton from "../layout/LinkButton";
import styles from "./Projects.module.css";
import ProjectCard from "../projects/ProjectCard";
import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false)

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  /* buscando dados na api */
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        
        method: "GET",
        headers: {
          "Content-Type": "aplication/json",
        },
      })
        .then((res) => res.json())
        .then((data) => { 
            setProjects(data) 
         /*    console.log(data) */
         setRemoveLoading(true)
          })
        .catch((err) => console.log(err));
    }, 300)
  }, []);

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
          {projects.length > 0 &&
            projects.map((project) => 
                <ProjectCard 
                id={project.id}
                name={project.name}
                budget={project.budget}
                category={project.category.name}  
                key={project.id}    
                />
            )
          }

          {!removeLoading && <Loading/>}
          
         {removeLoading && projects.length === 0 && (
           <p>Não há projetos cadastrados</p>
         )}
        
      </Container>
    </div>
  );
}

export default Projects;