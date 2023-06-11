import React from "react";
import { globallink, arrow } from "./Globallink.module.css";

function Globallink({ text }) {
  return (
    <div className={globallink}>
      <img className={arrow} src="./globallinkArrow/arrowToButton.png" /> {text}
    </div>
  );
}

export default Globallink;
