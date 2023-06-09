import React from 'react'
import {description} from './Description.module.css';

function Description({text}) {
  return (
    <div className={description}>{text}</div>
  )
}

export default Description