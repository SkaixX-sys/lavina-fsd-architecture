import React from 'react'
import {headerlink} from './Headerlink.module.css'
import arrowToButton from './globallinkArrow/arrowToButton.png'

function Headerlink({text}) {
  return (
    <div className={headerlink}><img src="./globallinkArrow/arrowToButton.png"/> {text}</div>
  )
}

export default Headerlink