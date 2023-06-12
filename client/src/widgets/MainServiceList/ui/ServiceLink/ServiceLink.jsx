import React from "react";
import { NavLink } from "react-router-dom";
import { arrow, serviceItemLink } from "./ServiceLink.module.css";

function ServiceLink({ link }) {
  return (
    <NavLink to={link} className={serviceItemLink}>
      <img src="./src/widgets/MainServiceList/ui/ServiceLink/ServiceLinkArrowIcon/arrowToButton.png" className={arrow} />{" "}
      Узнать больше
    </NavLink>
  );
}

export default ServiceLink;
