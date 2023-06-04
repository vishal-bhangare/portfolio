import Media from "react-media";
import styles from "./About.module.scss";
import { socialMediaLinks, otherProfiles } from "../../data/links";
import { skills } from "../../data/skills";
import parse from "html-react-parser";

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
                {socialMediaLinks.map((link) => (
                  <a href={link.url} target="_blank" key={link.name}>
                    {parse(link.icon)}
                  </a>
                ))}
              </div>
            </div>
            <div className={[styles.otherProfiles, styles.links].join(" ")}>
              <span className={styles.arrow}>{">"}</span>
              <span className={styles.linksTitle}>Some other profiles :</span>
              <div className={styles.icons}>
                {otherProfiles.map((link) => (
                  <a href={link.url} target="_blank" key={link.name}>
                    {parse(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.skillsContainer}>
            <div className={styles.subtitle}>Skills :</div>
            <div className={styles.Content}>
              {skills.map((skill,index) => (
                <div className={styles.skills} key={index}>
                  <div className={styles.CategoryName} key={index} >
                    {skill.category} skills
                  </div>
                  <div className={styles.CategorySkills} key={skill.category}>
                    {skill.skills.map((s) => (
                      <div className={styles.skill} key={s.name}>{s.name}</div>
                    ))}
                  </div>
                </div>
              ))}
              {/* <div className={styles.skills}>
                <div className={styles.CategoryName}>Core Skills</div>
                <div className={styles.CategorySkills}>
                  <div className={styles.skill}>C++</div>
                  <div className={styles.skill}>C</div>
                  <div className={styles.skill}>Java</div>
                </div>
              </div> */}
              {/* {socialMediaLinks.map((link) => (
                <a href={link.url} target="_blank">
                  {parse(link.icon)}
                </a>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
