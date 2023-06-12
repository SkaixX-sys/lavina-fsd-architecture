import React from 'react'
import {sideVerticalNumberTitle} from './SideVerticalNumberTitle.module.css';

function SideVerticalNumberTitle({id, title}) {
  return (
    <div className={sideVerticalNumberTitle}>{id} — {title}</div>
  )
}

export default SideVerticalNumberTitle