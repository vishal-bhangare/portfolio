import styles from "./Home.module.scss";
import { HashLink as Link } from "react-router-hash-link";

interface Props {
  activeLink: string;
  onChange: (value: string) => void;
}

const Home = ({ activeLink, onChange }: Props) => {
  function setActiveLink(name: string) {
    onChange(name);
  }
  return (
    <>
      <div className={styles.container} id="home">
        <div className={styles.content}>
          <h1 className={styles.intro}>
            Hello, I'm <span className={styles.name}>Vishal Bhangare</span>.
          </h1>
          <p className={styles.description}>A Student and developer.</p>
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
    </>
  );
};

export default Home;
