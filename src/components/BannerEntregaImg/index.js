import React, { Component } from "react";
import ImgBannerEntrega from "../../assets/ImgBanner/BannerEntrega.png";
import ImgBannerEntregaMobile from "../../assets/ImgBanner/BannerEntregaMobile.png";

export default class Index extends Component {
  render() {
    const isMobile = window.innerWidth <= 400;

    return (
      <div className="container-fluid" style={{ backgroundColor: "#000" }}>
        {isMobile ? (
          <img
            src={ImgBannerEntregaMobile}
            className="img-fluid"
            alt="Mobile Banner"
          />
        ) : (
          <img src={ImgBannerEntrega} className="img-fluid" alt="Banner" />
        )}
      </div>
    );
  }
}
