import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";

const LandingPage = () => {
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

export default LandingPage;