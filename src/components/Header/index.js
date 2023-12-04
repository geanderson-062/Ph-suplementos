import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Navbar from "../Navbar";
import Carousel from "../Carousel";

const Header = () => {
  useEffect(() => {
    ScrollReveal().reveal(".header", {
      duration: 1000,
      origin: "top",
      distance: "20px",
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <header className="header">
        <Navbar />
        <Carousel />
      </header>
    </>
  );
};

export default Header;
