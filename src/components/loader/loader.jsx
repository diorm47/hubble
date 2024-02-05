import React from "react";
import "./loader.css";
import { ReactComponent as LoaderImg } from "../../assets/images/loader.svg";

function Loader() {
  return (
    <div className="loader">
      <div className="loader_wrapper">
        <LoaderImg />
      </div>
    </div>
  );
}

export default Loader;
