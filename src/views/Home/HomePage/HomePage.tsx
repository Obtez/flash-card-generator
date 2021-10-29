import Hero from "../Hero/Hero";
import About from "../About/About";
import Contact from "../Contact/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Contact />
      </main>
    </>
  )
}

export default HomePage;