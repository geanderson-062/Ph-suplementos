import React, { Component, lazy, Suspense } from "react";

const Navbar = lazy(() => import("../Navbar"));
const Carousel = lazy(() => import("../Carousel/CarouselJsx"));
const Tabbar = lazy(() => import("../Tabbar"));

export default class Index extends Component {
  render() {
    return (
      <>
        <header>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <Carousel />
            <Tabbar />
          </Suspense>
        </header>
      </>
    );
  }
}
