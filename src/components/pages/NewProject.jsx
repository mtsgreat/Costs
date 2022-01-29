import styles from "./NewProject.module.css";
import ProjectForm from "../projects/ProjectForm";
import { useHistory } from 'react-router-dom';

function NewProject() {
  const history = useHistory();

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect com o history
        history.push('/projects', {message: "Projeto Cadastrado!"})
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionair os seus serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
