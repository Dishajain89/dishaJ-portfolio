"use client";

import { motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";

const projects = [
  {
    title: "Club Mahindra",
    description: "A dynamic website for Club Mahindra to showcase resorts and member benefits.",
    img: "/images/projects/artful-interior.jpg",
    link: "https://artful-interiors-demo.netlify.app",
  },
  {
    title: "Stride Learning Hub",
    description: "An educational platform with responsive design and modern UI.",
    img: "/images/projects/health-hive.jpg",
    link: "https://health-hive-demo.netlify.app/",
  },
  {
    title: "Royal Enfield UI Redesign",
    description: "Redesigned a bold and clean UI for Royal Enfield.",
    img: "/images/projects/royalbloom-wedding.jpg",
    link: "http://royal-bloom-weddings-demo.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section className={styles.projectsSection} id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.sectionTitle}
      >
        Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.sectionSubtitle}
      >
        These are some of my Projects
      </motion.p>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Image
              src={project.img}
              alt={project.title}
              width={300}
              height={200}
              className={styles.projectImage}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className={styles.link} target="_blank">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
