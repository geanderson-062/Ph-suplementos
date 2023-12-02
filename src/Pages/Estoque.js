import React from "react";
//components
import Header from "../components/Header";
import TitleEstoque from "../components/TItles/PageTitleEstoque";
import ProductCard from "../components/Card/ProductCard";
//services
import MensageBuyService from "../service/MensageBuyService/MensageBuyService";
import ProducsDataAll from "../service/ProductsAllService";

function Estoque() {
  return (
    <>
      <Header />
      <TitleEstoque />
      <section className="container">
        <div
          className="row row-cols-1 row-cols-md-4 g-4"
          style={{ marginTop: 50, marginLeft: "5%", marginRight: "5%" }}
        >
          {ProducsDataAll.map((product, index) => {
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

export default Estoque;
