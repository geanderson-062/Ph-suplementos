// Navigation.js
import React from "react";
//components
import Header from "../components/Header";
//titles section
import TitlePromocao from "../components/TItles/PageTitlePromocao";
import TitleMaisVendido from "../components/TItles/PageTitleMaisVendido";
import TitleDestaques from "../components/TItles/PageTitleDestaques";
//cards products
import CardPromocao from "../components/Card/PromocaoCard";
import CardDestaques from "../components/Card/DestaqueCard";
import CardMaisVendido from "../components/Card/MaisVendidoCard";
//buttons
import ButtonDestaque from "../components/Buttons/ButtonDestaque";
import ButtonPromocao from "../components/Buttons/ButtonPromocao";
import ButtonMaisVendido from "../components/Buttons/ButtonMaisVendido";

function Home() {
  return (
    <>
      <Header />
      <section className="container">
        <TitlePromocao />
        <CardPromocao />
        <ButtonPromocao />
        <TitleMaisVendido />
        <CardMaisVendido />
        <ButtonMaisVendido />
        <TitleDestaques />
        <CardDestaques />
        <ButtonDestaque />
      </section>
    </>
  );
}

export default Home;
