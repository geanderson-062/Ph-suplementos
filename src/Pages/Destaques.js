import React from "react";
//components
import Header from "../components/Header";
import TitleDestaques from "../components/TItles/PageTitleDestaques";

function Destaques() {
  return (
    <>
      <Header />

      <h1 className="fs-1 text-center" style={{ paddingTop: "100px" }}>
        Destaques
      </h1>
      <TitleDestaques />
    </>
  );
}

export default Destaques;
