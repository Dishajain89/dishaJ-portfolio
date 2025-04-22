"use client";

import { motion } from "framer-motion";
import styles from "./style.module.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt />, level: 90 },
  { name: "JavaScript", icon: <FaJs />, level: 60 },
  { name: "React", icon: <FaReact />, level: 80 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
  { name: "Tailwind", icon: <SiTailwindcss />, level: 70 },
  { name: "Bootstrap", icon: <SiBootstrap />, level: 80 },
  { name: "Sass", icon: <FaSass />, level: 75 },
];

export default function Skills() {
  return (
    <section className={styles.skillsSection} id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.sectionTitle}
      >
        My Skills
      </motion.h2>

      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skillCard}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className={styles.icon}>{skill.icon}</div>
            <h4>{skill.name}</h4>
            <div className={styles.progressBar}>
              <motion.div
                className={styles.progress}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
