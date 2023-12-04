import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
//components
import TitleDestaques from "../components/TItles/PageTitleDestaques";
import ProductCard from "../components/Card/ProductCard";
//services
import ProducsData from "../service/SeparatePage/Destaque";
import MensageBuyService from "../service/MensageBuyService/MensageBuyService";

function Destaques() {
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
      <div className="title">
        <TitleDestaques />
      </div>
      <section className="container">
        <div
          className="row row-cols-1 row-cols-md-4 g-4"
          style={{ marginTop: 50, marginLeft: "5%", marginRight: "5%" }}
        >
          {ProducsData.map((product, index) => {
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
      </section>
    </>
  );
}

export default Destaques;
