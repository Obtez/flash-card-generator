import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "components/Layout/Layout";
import BuilderPage from "../views/Builder/BuilderPage"
import HomePage from "../views/Home/HomePage";
import PageNotFound from "../views/PageNotFound/PageNotFound";

const Router = () => {
  return (
    <BrowserRouter>

        <Layout>
      <Switch>
        
          {/* Homepage */}
          <Route exact path="/">
            <HomePage />
          </Route>
          {/* Card Builder */}
          <Route exact path="/create">
            <BuilderPage />
          </Route>
          {/* 404 Not Found */}
          <Route path="*">
            <PageNotFound />
          </Route>
      </Switch>
        </Layout>

    </BrowserRouter>
  )
}

export default Router