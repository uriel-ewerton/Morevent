import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import HomeLogado from "../pages/HomeLogado";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Home />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/logado" element={<Private Item={HomeLogado} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
