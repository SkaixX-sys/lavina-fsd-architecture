import React from "react";
import { Image } from "react-bootstrap";
import {
  serviceItemImage,
  serviceItemImageWrapper,
  serviceItemDescription,
  serviceItemLink,
  textWrapper,
  serviceItemWrapper,
} from "./ServiceItem.module.css";
import SideVerticalNumberTitle from "../../ui/SideVerticalNumberTitle/SideVerticalNumberTitle";
import Description from "./../../../../shared/ui/Description/Description";
import ServiceLink from "./../ServiceLink/ServiceLink";

function ServiceItem({ src, id, title, description, link }) {
  return (
    <div className={serviceItemWrapper}>
      <div className="d-flex overflow-visible">
        <div className={serviceItemImageWrapper}>
          <Image src={src} className={serviceItemImage} />
        </div>
        <SideVerticalNumberTitle id={id} title={title} />
      </div>
      <div className={textWrapper}>
        <div className={serviceItemDescription}>
          <Description text={description} />
        </div>
        <div className={serviceItemLink}>
          <ServiceLink link={link} id={id}/>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
