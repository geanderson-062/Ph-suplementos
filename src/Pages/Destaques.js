import React from "react";
//components
import Header from "../components/Header";
import TitleDestaques from "../components/TItles/PageTitleDestaques";
import Card from "../components/Card/DestaqueCard";

function Destaques() {
  return (
    <>
      <Header />
      <TitleDestaques />
      <section className="container">
        <Card />
      </section>
    </>
  );
}

export default Destaques;
