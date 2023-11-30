// Navigation.js
import React from "react";
//components
import Header from "../components/Header";
//titles section
import TitleHome from "../components/TItles/PageTitleHome";
import TitlePromocao from "../components/TItles/PageTitlePromocao";
import TitleMaisVendido from "../components/TItles/PageTitleMaisVendido";
import TitleDestaques from "../components/TItles/PageTitleDestaques";
//cards products
import CardPromocao from "../components/Card/PromocaoCard";
import CardDestaques from "../components/Card/DestaqueCard";
import CardMaisVendido from "../components/Card/MaisVendidoCard";

function Home() {
  return (
    <>
      <Header />
      <TitleHome />
      <section className="container">
        <TitlePromocao />
        <CardPromocao />
        <TitleMaisVendido />
        <CardMaisVendido />
        <TitleDestaques />
        <CardDestaques />
      </section>
    </>
  );
}

export default Home;
