import React from "react";
import { globallink, arrow } from "./Globallink.module.css";
import { NavLink } from "react-router-dom";

function Globallink({ text,link }) {
  return (
    <NavLink to={link} className={globallink}>
      <img className={arrow} src="./src/shared/ui/GlobalLink/globallinkArrow/arrowToButton.png" /> {text}
    </NavLink>
  );
}

export default Globallink;
