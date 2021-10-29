import styles from "../LandingPage.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.aboutContainer}>
      <header>
        <h2>About <em>flashy</em></h2>
      </header>
        <p>Ever needed some flash cards? Ever tried to do that stuff in an everyday text processor? It can get annoying quite fast, especially with all those formatting issues. And don't get me started on layouts.</p>
        <p><strong>NEVER MORE!</strong></p>
        <p>With <em>flashy</em> you can easily create flash cards in... well in a flash! No more hassle.</p>
        <p>Enjoy!</p>
    </section>
  )
}

export default About;