import React, { Component } from "react";
import ImgBannerPerformance from "../../assets/ImgBanner/BannerPerformance.png";
import ImgBannerPerformanceMobile from "../../assets/ImgBanner/BannerPerformanceMobile.png";

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
