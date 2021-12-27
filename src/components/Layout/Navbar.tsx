import { Link } from "react-router-dom"
import styles from "./Layout.module.scss"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div className={styles.logoContainer}>
          <h1 className={styles.logo}>
            <span>hedgey</span>
            <span>-cards</span>
          </h1>
          <div className={styles.divider} />
          <div>
            <h2 className={styles.slogan}>
              <span>flashcard</span>
              <span>builder online</span>
            </h2>
          </div>
        </div>
      </Link>

      <div className={styles.navbar__links}>
        <button type="button">User Tips</button>
      </div>
    </nav>
  )
}

export default Navbar