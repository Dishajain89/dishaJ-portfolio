import Banner from "@/components/banner";
import styles from "./page.module.css";
import About from "@/components/about";
import MyBanner from "@/components/myBanner";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import ContactMe from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
   return (
      <div>
         {/* <Banner /> */}
         <Navbar />
         <MyBanner />
        <About />
        <Skills/>
        <Projects />
        <ContactMe/>
        <Footer/>
      </div>
   );
}
