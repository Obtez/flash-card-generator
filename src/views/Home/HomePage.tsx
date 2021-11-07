import {Link} from "react-router-dom"
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";

import styles from "./LandingPage.module.scss"

const HomePage = () => {
  return (
    <div className={styles.layout}>
      <h1>Under Construction</h1>
      <p>Check out the builder:</p>
      <Link to="/create">Click me!</Link>
    </div>
  )
}

export default HomePage;