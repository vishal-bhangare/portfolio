import styles from "./Contact.module.scss";
import { Contact as ContactData } from "../../data/contact";
import emailjs from "@emailjs/browser";

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.title}>Reach out to me</div>
      <div className={styles.content}>
        <div className={styles.location}>
          <div className={styles.icon}>
            <i className={"fa-regular fa-location-dot "}></i>
          </div>
          <div className={styles.name}>Location</div>
          <div className={styles.info}>Thane, India</div>
        </div>
        <div className={styles.email}>
          <div className={styles.icon}>
            <i className={"fa-regular fa-envelope "}></i>
          </div>
          <div className={styles.name}>Email Me</div>
          <a className={styles.info} href={"mailto:" + ContactData.email}>
            {ContactData.email}
          </a>
        </div>
        <div className={styles.callme}>
          <div className={styles.icon}>
            <i className={"fa-regular fa-phone-volume "}></i>
          </div>
          <div className={styles.name}>Call Me</div>
          <a className={styles.info} href={"tel:" + ContactData.phone}>
            {ContactData.phone.substring(0, 3) +
              " " +
              ContactData.phone.substring(3)}
          </a>
        </div>
        <form className={styles.contact}>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.name}
            placeholder="name"
          />
          <input
            type="email"
            name="email"
            id="email"
            className={styles.email}
            placeholder="email"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            className={styles.subject}
            placeholder="subject"
          />
          <textarea
            name="message"
            id="message"
            className={styles.message}
            placeholder="message"
            rows={4}
          />
          <input type="submit" value="Send" className={styles.submit} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
