import React, { Component } from "react";
import Navbar from "../Navbar";
import Carousel from "../Carousel";
import Tabbar from "../Tabbar";
export default class index extends Component {
  render() {
    return (
      <>
        <header>
          <Navbar />
          <Carousel />
          <Tabbar />
        </header>
      </>
    );
  }
}
