import React from "react";
//components
import Header from "../components/Header";
import TitleWhey from "../components/TItles/PageTitleWhey";
import Card from "../components/Card/WheyCard";

function Whey() {
  return (
    <>
      <Header />
      <TitleWhey />
      <section className="container">
        <Card />
      </section>
    </>
  );
}

export default Whey;
