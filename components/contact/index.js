"use client";

import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactMe() {
  return (
    <section className={styles.contactSection} id="contact">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.title}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className={styles.subText}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Have a project in mind or want to work together? Let’s talk!
      </motion.p>

      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent! (demo)");
        }}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required></textarea>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Send Message
        </motion.button>
      </form>

      <div className={styles.socials}>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:youremail@example.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
