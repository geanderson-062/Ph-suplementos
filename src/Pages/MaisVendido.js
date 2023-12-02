import React from "react";
//components
import Header from "../components/Header";
import TitleMaisVendido from "../components/TItles/PageTitleMaisVendido";
import ProductCard from "../components/Card/ProductCard";
//services
import ProducsData from "../service/SeparatePage/MaisVendido";
import MensageBuyService from "../service/MensageBuyService/MensageBuyService";

function Preworkout() {
  return (
    <>
      <Header />
      <TitleMaisVendido />
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

export default Preworkout;
