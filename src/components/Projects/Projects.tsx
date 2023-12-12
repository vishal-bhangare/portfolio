import styles from "./Projects.module.scss";
import { Projects as projectsData } from "../../data/projects";
import parse from "html-react-parser";
import { useState } from "react";

const Projects = () => {
  const [viewAll, setViewAll] = useState(false);
  return (
    <>
      <div className={styles.container} id="projects">
        <div className={styles.title}>
          <span>My Projects</span>
        </div>
        <div
          className={styles.projects}
          style={{ height: viewAll ? "auto" : "420px" }}
        >
          {projectsData.map((project) => (
            <div className={styles.project} key={project.name}>
              <div className={styles.image}>
                <img src={project.image} alt="loading..." />
              </div>
              <div className={styles.info}>
                <span className={styles.name}>{project.name}</span>
                <span className={styles.description}>
                  {parse(project.description)}
                </span>
                <div className={styles.links}>
                  {project.source && (
                    <div className={styles.link}>
                      <i className="fa-regular fa-code-branch"></i>
                      <a href={project.source} target="_blank">
                        Source
                      </a>
                    </div>
                  )}
                  {project.live && (
                    <div className={styles.link}>
                      <i className={"fa-solid fa-circle " + styles.dot}></i>
                      <a href={project.live} target="_blank">
                        Live
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          {!viewAll && (
            <div className={styles.viewMore}>
              <button
                onClick={() => {
                  setViewAll(true);
                }}
              >
                View All
              </button>
            </div>
          )}
        </div>
        {viewAll && (
          <div className={styles.viewMore}>
            <button
              onClick={() => {
                setViewAll(false);
              }}
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
