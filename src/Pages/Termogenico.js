import React from "react";
//components
import Header from "../components/Header";
import TitleTermogenico from "../components/TItles/PageTitleTermogenico";
import Card from "../components/Card/TermogenicoCard";

function Termogenico() {
  return (
    <>
      <Header />
      <TitleTermogenico />
      <section className="container">
        <Card />
      </section>
    </>
  );
}

export default Termogenico;
