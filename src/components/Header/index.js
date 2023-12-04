import React, { Component } from "react";
import Navbar from "../Navbar";
import Carousel from "../Carousel";
export default class index extends Component {
  render() {
    return (
      <>
        <header>
          <Navbar />
          <Carousel />
        </header>
      </>
    );
  }
}
