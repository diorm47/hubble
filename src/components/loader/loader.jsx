import React from "react";
import "./loader.css";
// import { ReactComponent as LoaderImg } from "../../assets/images/loader.svg";
import Lottie from "react-lottie";
import logo from "../../assets/LOGO.json";

function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: logo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="loader">
      <div className="loader_wrapper">
        <div className="loader_item">
          <Lottie options={defaultOptions} height={logo.h} width={logo.w} />
        </div>
      </div>
    </div>
  );
}

export default Loader;
