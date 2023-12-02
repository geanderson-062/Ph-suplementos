import React from "react";
//components
import Header from "../components/Header";
import TitlePromocao from "../components/TItles/PageTitlePromocao";
import ProductCard from "../components/Card/ProductCard";
//services
import ProducsData from "../service/SeparatePage/Promocao";
import MensageBuyService from "../service/MensageBuyService/MensageBuyService";

function Promocao() {
  return (
    <>
      <Header />
      <TitlePromocao />
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

export default Promocao;
