import React from "react";
//components
import Header from "../components/Header";
import Card from "../components/Card/CreatinaCard";
import TitleEstoque from "../components/TItles/PageTitleEstoque";

function Estoque() {
  return (
    <>
      <Header />
      <TitleEstoque />
      <section className="container">
        <Card />
      </section>
    </>
  );
}

export default Estoque;
