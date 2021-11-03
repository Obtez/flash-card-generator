import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";

import styles from "./LandingPage.module.scss"

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