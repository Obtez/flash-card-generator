import { ReactChild } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

interface PropTypes {
  children: ReactChild[]
}

const Layout = ({children}: PropTypes) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout