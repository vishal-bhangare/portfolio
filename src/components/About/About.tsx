import Media from "react-media";
import styles from "./About.module.scss";

const About = () => {
  return (
    <>
      <div className={styles.container} id="about">
        <div className={styles.title}>
          <span>About</span>
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.about}>
            <span className={styles.line1}>
              My name is Vishal Bhangare, a passionate full stack developer and
              a student currently pursuing degree in computer science.{" "}
            </span>
            <span className={styles.line2}>
              I'm learning and exploring new technologies to improve my skills
              and develop great products
            </span>
          </div>

          <div className={styles.linksContainer}>
            <div className={[styles.mailMe, styles.links].join(" ")}>
              <span className={styles.arrow}>{">"}</span>
              <span className={styles.linksTitle}>Mail me :</span>
              <div className={styles.icons}>
                <a href="mailto:vishalbhangare2@gmail.com">
                  <i className="fa-solid fa-envelope"></i>
                  vishalbhangare2@gmail.com
                </a>
              </div>
            </div>
            <div className={[styles.socialMedia, styles.links].join(" ")}>
              <span className={styles.arrow}>{">"}</span>
              <span className={styles.linksTitle}>Follow me on :</span>
              <div className={styles.icons}>
                <a href="" target="_blank">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="" target="_blank">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="" target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className={[styles.otherProfiles, styles.links].join(" ")}>
              <span className={styles.arrow}>{">"}</span>
              <span className={styles.linksTitle}>Some other profiles :</span>
              <div className={styles.icons}>
                <a href="" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="" target="_blank">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    id="leetcode"
                  >
                    <path
                      fill="#fff"
                      d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"
                    ></path>
                  </svg>
                </a>
              </div>

              {/* <i className="fab fa-hackerrank"></i> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
