import { ReactChild } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import styles from "./Layout.module.scss";

interface PropTypes {
  children: ReactChild
}

const Layout = ({children}: PropTypes) => {
  return (
    <div className={styles.layoutWrapper}>
      <Navbar />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout