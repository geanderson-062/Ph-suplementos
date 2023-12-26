import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
//components
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
  useEffect(() => {
    ScrollReveal().reveal(".button", {
      duration: 1000,
      origin: "bottom",
      distance: "20px",
      easing: "ease-in-out",
    });
  }, []);
  useEffect(() => {
    ScrollReveal().reveal(".title", {
      duration: 1000,
      origin: "right",
      distance: "20px",
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <section className="container">
        <div className="title">
          <TitlePromocao />
        </div>
        <div
          className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4"
          style={{ marginTop: 10, marginLeft: "5%", marginRight: "5%" }}
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
        <div className="button">
          <ButtonPromocao />
        </div>
        <div className="title">
          <TitleMaisVendido />
        </div>
        <div
          className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4"
          style={{ marginTop: 10, marginLeft: "5%", marginRight: "5%" }}
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
        <div className="button">
          <ButtonMaisVendido />
        </div>
        <div className="title">
          <TitleDestaques />
        </div>
        <div
          className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4"
          style={{ marginTop: 10, marginLeft: "5%", marginRight: "5%" }}
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
        <div className="button">
          <ButtonDestaque />
        </div>
      </section>
    </>
  );
}

export default Home;
