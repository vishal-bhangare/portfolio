import styles from "./Education.module.scss";

const Education = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.title}>
        <span>Education</span>
      </div>
      <div className={styles.content}>
        <div className={styles.grad}>
          <div className={styles.subtitle}>Graduation</div>
          <div className={styles.info}>
            <div className={styles.courseName}>BSC Computer Science</div>
            <div className={styles.institute}>
              B. K. Birla College of Arts, Science & Commerce, Kalyan
            </div>
            <div className={styles.years}>2021 ~ 2024</div>

            <div className={styles.cgpa}>CGPA: 9.50</div>
          </div>
        </div>
        <div className={styles.postgrad}>
          <div className={styles.subtitle}>Post Grad</div>
          <div className={styles.info}>
            <div className={styles.courseName}>MSC Computer Science</div>
            <div className={styles.institute}>
              B. K. Birla College of Arts, Science & Commerce, Kalyan
            </div>
            <div className={styles.years}>2024 ~ 2026</div>

            <div className={styles.cgpa}>CGPA: NA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
