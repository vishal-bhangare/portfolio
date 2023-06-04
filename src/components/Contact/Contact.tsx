import styles from "./Contact.module.scss";
import { Contact as ContactData } from "../../data/contact";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState(100);
  const form = React.createRef<HTMLFormElement>();
  function resetStatus() {
    setTimeout(() => {
      setStatus(100);
    }, 300000);
  }
  const sendEmail = (e: any) => {
    e.preventDefault();
    if (status == 100) {
      emailjs
        .sendForm(
          "service_ecu2lbt",
          "template_oawrvv8",
          form.current!,
          "XAnLlNhkP1wkZmkqF"
        )
        .then(
          (result) => {
            e.target.reset();
            console.log(result.text);
            setStatus(200);
            setTimeout(() => {
              setStatus(500);
              resetStatus();
            }, 5000);
          },
          (error) => {
            console.log(error.text);
            setStatus(201);
            setTimeout(() => {
              setStatus(500);
            }, 5000);
          }
        );
    }
  };

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
        <form ref={form} onSubmit={sendEmail} className={styles.contact}>
          <input
            type="text"
            name="from_name"
            id="from_name"
            className={styles.name}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="from_email"
            id="from_email"
            className={styles.email}
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="subject"
            id="subject"
            className={styles.subject}
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            id="message"
            className={styles.message}
            placeholder="Message"
            rows={4}
            required
          />
          <input
            type="submit"
            value="Send"
            className={styles.submit}
            disabled={status == 500}
          />
          <div className={status == 200 ? styles.successMsg : ""}>
            Message send successfully
            <i className="fa-regular fa-party-horn"></i>
          </div>
          <div className={status == 201 ? styles.errorMsg : ""}>
            Try Again !!!
          </div>
          <div className={status == 500 ? styles.waitMsg : ""}>
            Wait for 5 Minutes
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
