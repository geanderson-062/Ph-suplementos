import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
//components
import TitlePreworkout from "../components/TItles/PageTitlePreworkout";
import ProductCard from "../components/Card/ProductCard";
//services
import ProducsData from "../service/Products/Preworkout";
import MensageBuyService from "../service/MensageBuyService/MensageBuyService";

function Preworkout() {
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
        <TitlePreworkout />
      </div>
      <section className="container">
        <div
          className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4"
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
