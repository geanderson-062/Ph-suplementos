import React from "react";
//components
import Header from "../components/Header";
import TitleMaisVendido from "../components/TItles/PageTitleMaisVendido";
import Card from "../components/Card/MaisVendidoCard";

function Preworkout() {
  return (
    <>
      <Header />
      <TitleMaisVendido />
      <section className="container">
        <Card />
      </section>
    </>
  );
}

export default Preworkout;
