import React from 'react'
import { Image } from 'react-bootstrap';
import {serviceItemImage,serviceItemImageWrapper} from './ServiceItem.module.css'
import SideVerticalNumberTitle from '../../ui/SideVerticalNumberTitle/SideVerticalNumberTitle';
import Description from './../../../../shared/ui/Description/Description';
import ServiceLink from './../ServiceLink/ServiceLink';

function ServiceItem({src, id, title, description, link}) {
  return (
    <div>
        <div className='d-flex overflow-visible'>
            <div className={serviceItemImageWrapper}><Image src={src} className={serviceItemImage}/></div>
            <SideVerticalNumberTitle id={id} title={title}/>
        </div>
        <div>
            <div><Description text={description}/></div>
            <div><ServiceLink link={link}/></div>
        </div>
    </div>
  )
}

export default ServiceItem