"use client";

import styles from "./style.module.scss";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.divider} />
      <div className={styles.footerContent}>
        <p className={styles.tagline}>
          Built with ❤️ by Disha Jain | Front-End Developer
        </p>

        {/* <div className={styles.socialIcons}>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope />
          </a>
        </div> */}
      </div>
    </footer>
  );
}
