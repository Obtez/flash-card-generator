import styles from "./LandingPage.module.scss";

const Hero = () => {
  return (
    <header className={styles.heroSection}>
      <h1>flashy</h1>
      <p className={styles.subheading}>Produce flash cards - lightning fast</p>
      <div className={styles.btnContainer}>
        <a href="/build" className={styles.primaryBtn}>Try it out!</a>
        <a href="#about" className={styles.secondaryBtn}>Find out more</a>
      </div>
    </header>
  )
}

export default Hero;