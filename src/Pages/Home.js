// Navigation.js
import React from "react";
//components
import Header from "../components/Header";
import ProductCard from "../components/Card/ProductCard";
//titles section
import TitlePromocao from "../components/TItles/PageTitlePromocao";
import TitleMaisVendido from "../components/TItles/PageTitleMaisVendido";
import TitleDestaques from "../components/TItles/PageTitleDestaques";
//buttons
import ButtonDestaque from "../components/Buttons/ButtonDestaque";
import ButtonPromocao from "../components/Buttons/ButtonPromocao";
import ButtonMaisVendido from "../components/Buttons/ButtonMaisVendido";
//services
import MensageBuyService from "../service/MensageBuyService/MensageBuyService";
import ProducsDataMaisVendido from "../service/SeparatePage/MaisVendido";
import ProducsDataDestaques from "../service/SeparatePage/Destaque";
import ProducsDataPromocao from "../service/SeparatePage/Promocao";

function Home() {
  return (
    <>
      <Header />
      <section className="container">
        <TitlePromocao />
        <div
          className="row row-cols-1 row-cols-md-4 g-4"
          style={{ marginTop: 50, marginLeft: "5%", marginRight: "5%" }}
        >
          {ProducsDataMaisVendido.map((product, index) => {
            const Contato = MensageBuyService(product);

            return (
              <ProductCard
                key={index}
                product={product}
                index={index}
                Contato={Contato}
              />
            );
          })}
        </div>
        <ButtonPromocao />
        <TitleMaisVendido />
        <div
          className="row row-cols-1 row-cols-md-4 g-4"
          style={{ marginTop: 50, marginLeft: "5%", marginRight: "5%" }}
        >
          {ProducsDataDestaques.map((product, index) => {
            const Contato = MensageBuyService(product);

            return (
              <ProductCard
                key={index}
                product={product}
                index={index}
                Contato={Contato}
              />
            );
          })}
        </div>
        <ButtonMaisVendido />
        <TitleDestaques />
        <div
          className="row row-cols-1 row-cols-md-4 g-4"
          style={{ marginTop: 50, marginLeft: "5%", marginRight: "5%" }}
        >
          {ProducsDataPromocao.map((product, index) => {
            const Contato = MensageBuyService(product);

            return (
              <ProductCard
                key={index}
                product={product}
                index={index}
                Contato={Contato}
              />
            );
          })}
        </div>
        <ButtonDestaque />
      </section>
    </>
  );
}

export default Home;
