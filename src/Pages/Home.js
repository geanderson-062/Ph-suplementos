// Navigation.js
import React from "react";
//components
import Header from "../components/Header";
import TitleHome from "../components/TItles/PageTitleHome";

function Home() {
  return (
    <>
      <Header />

      <h1 className="fs-1 text-center" style={{ paddingTop: "100px" }}>
        home
      </h1>

      <TitleHome />

    </>
  );
}

export default Home;
