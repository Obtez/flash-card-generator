import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";
import BuilderPage from "../pages/Builder/Builder";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const Router = () => {
  return (
        <Routes>
          <Route path="/" element={<BuilderPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
  )
}

export default Router