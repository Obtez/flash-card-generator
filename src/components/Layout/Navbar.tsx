import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <p>hedgey-cards</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/build">Create</Link>
        </li>

        <li>
          <Link to="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar