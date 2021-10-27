import {BrowserRouter, Switch, Route} from "react-router-dom"
import CardBuilder from "../components/CardBuilder"
import LandingPage from "../components/LandingPage"
import Layout from "../components/Layout"
import PdfPreview from "../components/PdfPreview"

const Router = () => {
  return (
    <BrowserRouter>
      
      <Layout.Navbar />

      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/build">
          <CardBuilder />
        </Route>
        <Route exact path="/preview">
          <PdfPreview />
        </Route>
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>

      <Layout.Footer />

    </BrowserRouter>
  )
}

export default Router