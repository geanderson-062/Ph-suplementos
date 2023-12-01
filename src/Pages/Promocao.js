import React from "react";
//components
import Header from "../components/Header";
import TitlePromocao from "../components/TItles/PageTitlePromocao";
import Card from "../components/Card/PromocaoCard";

function Promocao() {
  return (
    <>
      <Header />
      <TitlePromocao />
      <section className="container">
        <Card />
      </section>
    </>
  );
}

export default Promocao;
