// Navigation.js
import React from "react";
import { Link } from "react-router-dom";
//components
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <h1 className="fs-1 text-center" style={{ paddingTop: "100px" }}>
        home
      </h1>
    </>
  );
}

export default Home;
