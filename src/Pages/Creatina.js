import React from "react";
//components
import Header from "../components/Header";
import TitleCreatina from "../components/TItles/PageTitleCreatina";
import ProductCard from "../components/Card/ProductCard";
//services
import ProducsData from "../service/Products/Whey";
import MensageBuyService from "../service/MensageBuyService/MensageBuyService";

function Creatina() {
  return (
    <>
      <Header />
      <TitleCreatina />
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

export default Creatina;
