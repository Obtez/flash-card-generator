import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Back Home</Link>
    </main>
  )
}

export default PageNotFound;