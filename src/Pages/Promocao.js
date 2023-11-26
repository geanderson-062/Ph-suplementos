import React from "react";
//components
import Header from "../components/Header";
import TitlePromocao from "../components/TItles/PageTitlePromocao";

function Promocao() {
  return (
    <>
      <Header />

      <h1 className="fs-1 text-center" style={{ paddingTop: "100px" }}>
        Promoção
      </h1>

      <TitlePromocao />

    </>
  );
}

export default Promocao;
