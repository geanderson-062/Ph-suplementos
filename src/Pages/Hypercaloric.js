import React from "react";
//components
import Header from "../components/Header";
import TitleHypercaloric from "../components/TItles/PageTitleHypercaloric";
import Card from "../components/Card/HypercaloricCard";

function Hypercaloric() {
  return (
    <>
      <Header />
      <TitleHypercaloric />
      <section className="container">
        <Card />
      </section>
    </>
  );
}

export default Hypercaloric;
