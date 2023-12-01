import React from "react";
//components
import Header from "../components/Header";
import TitlePreworkout from "../components/TItles/PageTitlePreworkout";
import Card from "../components/Card/PreworkoutCard";

function Preworkout() {
  return (
    <>
      <Header />
      <TitlePreworkout />
      <section className="container">
        <Card />
      </section>
    </>
  );
}

export default Preworkout;
