import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Aside } from "../Pages/Home/components/Aside/Aside";
import "./LayoutComponent.css";
import { useLocation } from "react-router-dom";

export const LayoutComponent = ({ children, props }) => {
  const location = useLocation();

  const { optionData } = props;

  return (
    <>
      <Header props={props} />
      <div className="App">
        {location.pathname === "/favorites" ||
        location.pathname === "/new_video" ? null : (
          <Aside options={optionData} />
        )}

        <div
          className={
            location.pathname === "/new_video" &&
            location.pathname === "/watch_video" &&
            location.pathname === "/*"
              ? "main-container"
              : "video-main-container"
          }
        >
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};
