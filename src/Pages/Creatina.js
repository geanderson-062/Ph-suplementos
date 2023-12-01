import React from "react";
//components
import Header from "../components/Header";
import TitleCreatina from "../components/TItles/PageTitleCreatina";
import Card from "../components/Card/CreatinaCard";

function Creatina() {
  return (
    <>
      <Header />
      <TitleCreatina />
      <section className="container">
        <Card />
      </section>
    </>
  );
}

export default Creatina;
