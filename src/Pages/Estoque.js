import React from "react";
//components
import Header from "../components/Header";
import TitleEstoque from "../components/TItles/PageTitleEstoque";

import Selector from "../components/Selector";
//services

function Estoque() {
  return (
    <>
      <Header />
      <TitleEstoque />
      <section className="container">
        <Selector />
      </section>
    </>
  );
}

export default Estoque;
