import React, { Component } from "react";
import ImgBannerPerformance from "../../assets/ImgBanner/BannerPerformance.png";
import ImgBannerPerformanceMobile from "../../assets/ImgBanner/BannerPerformanceMobile.png";

export default class Index extends Component {
  render() {
    const isMobile = window.innerWidth <= 400;

    return (
      <div className="container-fluid" style={{ backgroundColor: "#000" }}>
        {isMobile ? (
          <img
            src={ImgBannerPerformanceMobile}
            className="img-fluid"
            alt="Mobile Banner"
          />
        ) : (
          <img src={ImgBannerPerformance} className="img-fluid" alt="Banner" />
        )}
      </div>
    );
  }
}
