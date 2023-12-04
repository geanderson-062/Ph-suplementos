import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
//components
import TitleEstoque from "../components/TItles/PageTitleEstoque";
import Selector from "../components/Selector";

function Estoque() {
  useEffect(() => {
    ScrollReveal().reveal(".title", {
      duration: 1000,
      origin: "right",
      distance: "20px",
      easing: "ease-in-out",
    });
  }, []);
  useEffect(() => {
    ScrollReveal().reveal(".selector", {
      duration: 1000,
      origin: "top",
      distance: "20px",
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <div className="title">
        <TitleEstoque />
      </div>
      <section className="container selector">
        <Selector />
      </section>
    </>
  );
}

export default Estoque;
