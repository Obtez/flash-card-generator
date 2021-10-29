import { Switch, Route, BrowserRouter } from "react-router-dom";
import BuilderPage from "../views/Builder/BuilderPage/BuilderPage";
import HomePage from "../views/Home/HomePage/HomePage";
import PageNotFound from "../views/PageNotFound/PageNotFound";

const Router = () => {
  return (
    <BrowserRouter>

      <Switch>

        {/* Homepage */}
        <Route exact path="/">
          <HomePage />
        </Route>

        {/* Card Builder */}
        <Route exact path="/build">
          <BuilderPage />
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