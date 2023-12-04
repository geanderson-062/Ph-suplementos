import React from "react";
//navigator
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//front-end framework
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//components
import Footer from "./components/Footer";
import Header from "./components/Header";
//all pages navigation
import Home from "./Pages/Home";
import Destaques from "./Pages/Destaques.js";
import Estoque from "./Pages/Estoque.js";
import Promocao from "./Pages/Promocao.js";
import Licenca from "./Pages/Licenca.js";
import Preworkout from "./Pages/Preworkout.js";
import Hypercaloric from "./Pages/Hypercaloric.js";
import Termogenico from "./Pages/Termogenico.js";
import Creatina from "./Pages/Creatina.js";
import Whey from "./Pages/Whey.js";
import MaisVendido from "./Pages/MaisVendido.js";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destaques" element={<Destaques />} />
          <Route path="/Estoque" element={<Estoque />} />
          <Route path="/Promocao" element={<Promocao />} />
          <Route path="/Licenca" element={<Licenca />} />
          <Route path="/Preworkout" element={<Preworkout />} />
          <Route path="/Hypercaloric" element={<Hypercaloric />} />
          <Route path="/Termogenico" element={<Termogenico />} />
          <Route path="/Creatina" element={<Creatina />} />
          <Route path="/Whey" element={<Whey />} />
          <Route path="/MaisVendido" element={<MaisVendido />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
