import React, { Component } from "react";
import ImgBannerEntrega from "../../assets/ImgBanner/BannerEntrega.png";
import ImgBannerEntregaMobile from "../../assets/ImgBanner/BannerEntregaMobile.png";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth < 800,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({
      isMobile: window.innerWidth < 800,
    });
  }

  render() {
    const { isMobile } = this.state;

    return (
      <>
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
      </>
    );
  }
}
