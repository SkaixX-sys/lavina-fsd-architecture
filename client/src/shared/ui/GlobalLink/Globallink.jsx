import React from 'react'
import {globallink} from './Globallink.module.css'

function Globallink({text}) {
  return (
    <div className={globallink}>{text}</div>
  )
}

export default Globallink