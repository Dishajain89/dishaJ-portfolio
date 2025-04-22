"use client";

import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <Link href="#home" className={styles.logo}>
          DishaJ
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          <li><Link href="/resume.pdf" download className={styles.resumeBtn}>Resume</Link></li>
        </ul>
        <div className={styles.mobileToggle} onClick={handleToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className={styles.mobileMenu}
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            exit={{ y: -300 }}
            transition={{ duration: 0.4 }}
          >
            <li><Link href="#about" onClick={closeMenu}>About</Link></li>
            <li><Link href="#skills" onClick={closeMenu}>Skills</Link></li>
            <li><Link href="#projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link href="#contact" onClick={closeMenu}>Contact</Link></li>
            <li><Link href="/resume.pdf" download onClick={closeMenu} className={styles.resumeBtn}>Resume</Link></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
