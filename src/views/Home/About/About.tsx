import styles from "../LandingPage.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <header>
        <h2>About <em>flashy</em></h2>
      </header>

        <p>Ever needed some flash cards? Ever tried to do that stuff in an everyday text processor? It can get annoying quite fast, especially with all those formatting issues. And don't get me started on layouts.
        <br />
        <br />
        With <em>flashy</em> you can easily create flash cards in... well in a flash! No more hassle.
        <br />
        Simply build your flash cards with our easy to navigate user interface. Flashy will then handle all the layout for printing itself.
        <br />
        <br />
        Enjoy!
      </p>
    </section>
  )
}

export default About;