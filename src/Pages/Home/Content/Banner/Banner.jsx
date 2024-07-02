import React from "react";
import "./Banner.css";
import BannerContent from "./bannerContent/BannerContent";
import bannerLogo from "./banner_gif.gif";


export const Banner = () => {
  return (
    <div className="banner-container">
      <img
        src={bannerLogo}
        alt="banner"
      />
      <BannerContent />
    </div>
  );
};
