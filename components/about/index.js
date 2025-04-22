"use client";

import { motion } from "framer-motion";
import styles from "./style.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.imageCard}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/mypic5.png"
            alt="Disha Profile"
          />
        </motion.div>

        <motion.div
          className={styles.textCard}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>About Me</h2>
          <p>
          Hi! I'm <strong>Disha Jain</strong>, a passionate Front-End Developer with 3+ years of
          hands-on experience crafting interactive and responsive websites. I specialize
          in <strong>Next.js</strong>, and love turning creative ideas into beautiful, functional user experiences.
        </p>
        <p>
          I’ve worked on major projects like <em>Club Mahindra, Stride Learning Hub, Royal Enfield,</em> and
          redesigned the TCZ website during my time at <strong>Techchefz Pvt. Ltd.</strong>
        </p>
        <p>
          My toolbox includes HTML, CSS, JavaScript, Sass, Bootstrap, Tailwind CSS, React, Next.js and Material UI.
          I enjoy pushing designs to life with clean, scalable code and a keen eye for detail.
        </p>
        <p>
          What sets me apart? I believe in writing code with empathy — balancing user needs and developer experience.
          I’m open to <strong>remote</strong> and <strong>full-time</strong> roles globally.
        </p>
        </motion.div>
      </div>
    </section>
  );
}