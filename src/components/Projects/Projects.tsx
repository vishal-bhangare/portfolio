import styles from "./Projects.module.scss";
import { Projects as projectsData } from "../../data/projects";

const Projects = () => {
  return (
    <div className={styles.container} id="projects">
      <div className={styles.title}>
        <span>My Projects</span>
      </div>
      <div className={styles.projects}>
        {projectsData.map((project) => (
          <div className={styles.project} key={project.name}>
            <div className={styles.image}>
              <img src={project.image} alt="loading..." />
            </div>
            <div className={styles.info}>
              <span className={styles.name}>{project.name}</span>
              <span className={styles.description}>{project.description}</span>
              <div className={styles.links}>
                <div className={styles.link}>
                  <i className="fa-regular fa-code-branch"></i>
                  <a href={project.source} target="_blank">
                    Source
                  </a>
                </div>
                <div className={styles.link}>
                  <i className={"fa-solid fa-circle " + styles.dot}></i>
                  <a href={project.live} target="_blank">
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
