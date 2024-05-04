import { useEffect, useRef } from "react";
import styles from "./Home.module.scss";
import { HashLink as Link } from "react-router-hash-link";

interface Props {
  activeLink: string;
  onChange: (value: string) => void;
}

const RESUME_URL =
  "https://drive.google.com/file/d/1ZUWMB3DPAGh-6bmejsBLhaZo_h4bCU7h/view?usp=sharing";

const Home = ({ activeLink, onChange }: Props) => {
  const nameCharsRefs = useRef<HTMLSpanElement[]>([]);
  function setActiveLink(name: string) {
    onChange(name);
  }
  useEffect(() => {
    const elements = nameCharsRefs.current;
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.animationDelay = i / 12 + "s";
    }
  }, [nameCharsRefs]);
  return (
    <>
      <div className={styles.container} id="home">
        <div className={styles.content}>
          <h1 className={styles.intro}>
            Hello, I'm{" "}
            <div className={styles.name}>
              {[..."Vishal Bhangare"].map((char, i) => (
                <span
                  key={i}
                  ref={(el: HTMLSpanElement) => nameCharsRefs.current.push(el)}
                  className={styles.char}
                >
                  {char}
                </span>
              ))}
            </div>
            .
          </h1>
          <p className={styles.description}>A Student and developer.</p>
          <div className={styles.actionBtns}>
            <Link to={RESUME_URL} target="_blank" className={styles.resume}>
              Resume
            </Link>
            <Link
              to="#about"
              className={styles["view-more"]}
              onClick={() => {
                setActiveLink("about");
              }}
              smooth
            >
              View More <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
