import Hero from "../Hero/Hero";
import About from "../About/About";
import Contact from "../Contact/Contact";

import styles from "../LandingPage.module.scss"

const HomePage = () => {
  return (
    <div className={styles.layout}>
      <Hero />
      <About />
      <Contact />
    </div>
  )
}

export default HomePage;