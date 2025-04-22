"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./style.module.scss";

const Banner = () => {
   const [showNav, setShowNav] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 50) {
            setShowNav(true);
         } else {
            setShowNav(false);
         }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <div className={styles.banner}>
         {/* Hidden Navbar */}
         <nav className={`${styles.navbar} ${showNav ? styles.visible : ""}`}>
            <h1>My Portfolio</h1>
            <ul className={styles.navList}>
               <li>About</li>
               <li>My Work</li>
               <li>Contact</li>
            </ul>
         </nav>

         <div className={styles.content}>
            <div className={styles.textSection}>
               <h2 className={styles.greet}>Hi, Everyone</h2>
               <h1 className={styles.name}>I'm Disha Jain</h1>
               <h3 className={styles.role}>Front-End Developer</h3>
               <p>Building beautiful web experiences with code.</p>
            </div>

            {/* Developer Image with Animation */}
            {/* <div className={styles.imageSection}>
          <Image
            src="/images/mypic4.png"
            alt="Developer"
            width={500}
            height={600}
            className={styles.animatedImage}
          />
        </div> */}
            <div className={styles.neonBorder}>
               <img src="/images/mypic4.png" alt="Neon Glow" className={styles.neonImage} />
            </div>

         </div>
      </div>
   );
};

export default Banner;
