import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./_styles/Layout.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  if (!isOpen) {
    return (
      <nav className={styles.navbarContainer}>
        <button type="button" onClick={toggleMenu}><GiHamburgerMenu /></button>
      </nav>
    )
  }

  return (
    <nav className={styles.navbarContainer}>
        <button type="button" onClick={toggleMenu}><AiOutlineClose /></button>
      <div className={styles.logoContainer}>
        <p><Link to="/">flashy</Link></p>
      </div>

      <ul className={styles.navbarMenu}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/build">CREATE</Link>
        </li>
        <li>
          <Link to="#about">ABOUT</Link>
        </li>
        <li>
          <Link to="#contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;