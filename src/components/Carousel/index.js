import React, { Component } from "react";
import ImgBannerEntrega from "../../assets/ImgBanner/BannerEntrega.png";
import ImgBannerPerformance from "../../assets/ImgBanner/BannerPerformance.png";

export default class Index extends Component {
  render() {
    return (
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ImgBannerEntrega} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img
              src={ImgBannerPerformance}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
