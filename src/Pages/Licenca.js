import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
//components
import Header from "../components/Header";
import TitleLicenca from "../components/TItles/PageTitleLicenca";

function Licenca() {
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
      <Header />
      <div className="title">
        <TitleLicenca />
      </div>
    </>
  );
}

export default Licenca;
