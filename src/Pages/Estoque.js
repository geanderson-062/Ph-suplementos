import React from "react";
//components
import Header from "../components/Header";
import TitleEstoque from "../components/TItles/PageTitleEstoque";
//card section
import CreatinaCard from "../components/Card/CreatinaCard";
import HypercaloricCard from "../components/Card/HypercaloricCard";
import PreworkoutCard from "../components/Card/PreworkoutCard";
import TermogenicoCard from "../components/Card/TermogenicoCard";
import WheyCard from "../components/Card/WheyCard";
//titles section products
import TitleCreatina from "../components/TItles/PageTitleCreatina";
import TitleHypercaloric from "../components/TItles/PageTitleHypercaloric";
import TitlePreworkout from "../components/TItles/PageTitlePreworkout";
import TitleTermogenico from "../components/TItles/PageTitleTermogenico";
import TitleWhey from "../components/TItles/PageTitleWhey";

function Estoque() {
  return (
    <>
      <Header />
      <TitleEstoque />
      <section className="container">
        <TitleCreatina />
        <CreatinaCard />
        <TitleHypercaloric />
        <HypercaloricCard />
        <TitlePreworkout />
        <PreworkoutCard />
        <TitleTermogenico />
        <TermogenicoCard />
        <TitleWhey />
        <WheyCard />
      </section>
    </>
  );
}

export default Estoque;
