import { Link } from "react-router-dom"
import styles from "./Layout.module.scss"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        hedgeyCards
      </Link>
      <ul className={styles.menu}>
        <li>
          <Link to="/">Editor</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar