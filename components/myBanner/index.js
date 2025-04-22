"use client";

import { motion } from "framer-motion";
import styles from "./style.module.scss";
import Link from "next/link";

export default function Banner() {
  return (
    <section className={styles.banner} id="home">
      <div className={styles.container}>
        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>
            Hi, I'm <span>Disha Jain</span>
          </h1>
          <p>
            Front-End Developer with <strong>3+ years</strong> of experience building stunning, scalable, and high-performance websites.
            Expert in <strong>Next.js, React, Scss,</strong> and more.
          </p>
          <div className={styles.buttons}>
            <Link href="#projects">
              <button className={styles.primaryBtn}>My Projects</button>
            </Link>
            <Link href="/resume.pdf" download>
              <button className={styles.secondaryBtn}>Download CV</button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className={styles.imageBlock}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.imageWrapper}>
            <img
              src="./images/mypic1.png"
              alt="Disha Jain UI"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}