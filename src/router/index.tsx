import {Switch, Route, BrowserRouter} from "react-router-dom"
import CardBuilderPage from "../components/CardBuilder"
import LandingPage from "../components/LandingPage"
import PageNotFound from "../components/PageNotFound"

const Router = () => {
  return (
    <BrowserRouter>

      <Switch>

        {/* Homepage */}
        <Route exact path="/">
          <LandingPage />
        </Route>

        {/* Card Builder */}
        <Route exact path="/build">
          <CardBuilderPage />
        </Route>

        {/* 404 Not Found */}
        <Route path="*">
          <PageNotFound />
        </Route>

      </Switch>

    </BrowserRouter>
  )
}

export default Router