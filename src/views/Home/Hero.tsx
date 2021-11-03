import LinkButton from "components/LinkButton/LinkButton";
import styles from "./LandingPage.module.scss";

const Hero = () => {
  return (
    <header className={styles.hero}>
      <h1>flashy</h1>
      <p className={styles.subheading}>Create flash cards - lightning fast</p>
      <div className={styles.btnContainer}>
        <LinkButton href="/build" type="primary">Try it out!</LinkButton>
        <LinkButton href="#about" type="secondary">Find out more</LinkButton>
      </div>
    </header>
  )
}

export default Hero;