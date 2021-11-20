import { Link } from "react-router-dom"
import styles from "./Layout.module.scss"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        hedgeyCards
      </Link>
    </nav>
  )
}

export default Navbar